import { BrowserClient } from 'protobuf-ws';
import type { Writer } from "protobufjs";
import { stockRequest, stockResponse } from './proto/stock';
import { map, Observable } from 'rxjs';

const client = new BrowserClient("ws://localhost:8080");

type Encode<T> = {
    encode:(input:T)=>Writer
}
type Decode<T> = {
    decode:(input:Uint8Array)=>T
}

const ProtoUnary =(client:BrowserClient)=>(name:string)=> <I,O>(encode:Encode<I>,decode:Decode<O>) => (input:I):Promise<O> => {
        return new Promise((resolve, reject) => {
            const requestBuff = encode.encode(input).finish();
            client.RpcUnary()(name,requestBuff,(err,data)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(decode.decode(data!));
                }
            })
        })
}

const clientUnary = ProtoUnary(client);

const getStockPrice = clientUnary("stock.getStockPrice")(stockRequest,stockResponse);
getStockPrice(stockRequest.create({ name: "test1111" })).then(res=>{
    console.log(res);
})


const ProtoStream = (client:BrowserClient)=>(name:string)=> <I,O>(encode:Encode<I>,decode:Decode<O>) => (input:I):Observable<O> => {
    const requestBuff = encode.encode(input).finish();
    console.log("requestBuff",requestBuff);
    return client.RpcStream()(name,requestBuff).pipe(
        map(data=>decode.decode(data))
    )
}

const clientStream = ProtoStream(client);

const getStockPriceStream = clientStream("stock.getStockPrice")(stockRequest,stockResponse);
getStockPriceStream(stockRequest.create({ name: "test2222" })).subscribe(res=>{
    console.log(res.toJSON())
})