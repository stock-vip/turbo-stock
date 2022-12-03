import { WebSocketServer } from "ws";
import { Observable } from 'rxjs'
import { decode, parseReturnMsg } from "./utils";
import md5 from "md5";

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
			console.log("new connection");
			ws.on("message", (buffer) => {
				console.log("receive message", buffer);
				let msg = decode(Uint8Array.from(buffer as Uint8Array));
				console.log("receive message to msg :", msg);
				this.deal(msg.method)(msg.id)(msg.data)((data) => {
					console.log("send data from rxjs", data);
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
		this.table.set(md5(id), deal as Fn);
	}

	registerStream(id: string, deal: StreamFn) {
		console.log("registerStream key is ", id, md5(`stream-${id}`));
		this.streamTabble.set(md5(`stream-${id}`), deal);
	}

	private deal(key: string) {
		console.log("deal key is :", key);
		return (id:string)=>{
			console.log("deal id is :", id);
			if (id.startsWith("stream-")) {
				return this.dealStream(key);
			}
			return this.dealUnary(key);
		}
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
			console.log("dealStream", key, input);
			const deal = this.streamTabble.get(key);
			console.log("deal Stream is ok :", deal);
			if (deal) {
				deal(input).subscribe((data) => {
					console.log("send data", data);
					doit(data);
				});
			}
			return null;
		};
	}
}