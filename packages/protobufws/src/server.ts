import { WebSocketServer } from "ws";
import { Observable } from 'rxjs'
import { decode, parseReturnMsg } from "./utils";

type Fn = (input: Uint8Array | null) => Uint8Array;
type StreamFn = (input: Uint8Array | null) => Observable<Uint8Array>;

export class Server {
	private table: Map<string, Fn> = new Map();
	private streamTabble: Map<string, StreamFn> = new Map();
	private ws: WebSocketServer;
	constructor(port: number) {
		this.ws = new WebSocketServer({ port });
        this.process()
	}

	private process() {
		this.ws.on("connection", (ws) => {
			ws.on("message", (buffer) => {
				let msg = decode(Uint8Array.from(buffer as Uint8Array));
				this.deal(msg.method)(msg.data)((data) => {
					ws.send(parseReturnMsg({
						id: msg.id,
						status: data ? "1" : "0",
						data,
					}))
				});
                
			});
		});
	}

	register(id:string, deal: Fn | StreamFn) {
		if (id.startsWith("stream-")){
			this.streamTabble.set(id, deal as StreamFn);
		}else{
			this.table.set(id, deal as Fn);
		}
	}

	private deal(key: string) {
		if (key.startsWith("stream-")) {
			return this.dealStream(key);
		}
		return this.dealUnary(key);
	}

	private dealUnary(key: string) {
		return (input: Uint8Array | null) =>(doit: (data: Uint8Array) => void) => {
			const deal = this.table.get(key);
			if (deal) {
				return doit( deal(input));
			}
			return null;
		};
	}

	private dealStream(key: string) {
		return (input: Uint8Array | null) => (doit: (data: Uint8Array) => void) => {
			const deal = this.streamTabble.get(key);
			if (deal) {
				deal(input).subscribe(doit);
			}
			return null;
		};
	}
}