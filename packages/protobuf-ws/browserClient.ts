import md5 from 'md5'
import { v4 } from "uuid";
import { Subject } from 'rxjs'

import type { RPCImpl , RPCImplCallback } from "protobufjs";

import { decodeReturnMsg, encode } from "./utils";


export type RPCFn = (method: string, data: Uint8Array, callback: RPCImplCallback) => void;
export type RPCStreamFn = (method: string, data: Uint8Array) => Subject<Uint8Array>;

export class Client {
	private todo: Uint8Array[] = [];
	private callbacks: Map<string, RPCImplCallback> = new Map();
	private streamcallbacks: Map<string, Subject<Uint8Array>> = new Map();
	private ws: WebSocket;

	constructor(url: string) {
		this.ws = new WebSocket(url);
		this.pump();
	}
	private pump() {
        this.ws.onopen = () => {
            this.ws.onmessage = (msg) =>{
				msg.data.arrayBuffer().then((res:any)=>{
					let data = new Uint8Array(res);
					let msgInfo = decodeReturnMsg(data);
					if(msgInfo.id.startsWith('stream-')){
						let callback = this.streamcallbacks.get(msgInfo.id);
						if (callback) {
							callback.next(msgInfo.data!);
						}
					}else{
						let callback = this.callbacks.get(msgInfo.id);
						if (callback) {
							this.callbacks.delete(msgInfo.id);
							callback(null, msgInfo.data);
						}
					}
				});

			}
            if (this.todo.length > 0) {
				this.todo.forEach((it) => {
					this.ws.send(it);
				});
				this.todo = [];
            }
        }
	}

	public Rpc(): RPCImpl {
		return (method, data, callback) => {
            let id = v4();
			this.callbacks.set(id, callback);
			const bufferData = encode(id, md5(method.toString()), data);
			if (this.ws.readyState !== 1) {
				this.todo.push(bufferData);
			} else {
				this.ws.send(bufferData);
			}
		};
	}
	public RpcUnary(): RPCFn {
		return (method,data, callback) => {
            let id = v4();
			this.callbacks.set(id, callback);
			const bufferData = encode(id, md5(`stream-${method}`), data);
			if (this.ws.readyState !== 1) {
				this.todo.push(bufferData);
			} else {
				this.ws.send(bufferData);
			}
		};
	}

	public RpcStream():RPCStreamFn {
		return (method,data) => {
			let id = `stream-${v4()}`;
			let subject = new Subject<Uint8Array>();
			this.streamcallbacks.set(id, subject);
			const bufferData = encode(id, md5(`stream-${method}`),data);
			if (this.ws.readyState !== 1) {
				this.todo.push(bufferData);
			}else{
				this.ws.send(bufferData);
			}
			return subject;
	}
}

    public close(){
         this.ws.close()
    }
}