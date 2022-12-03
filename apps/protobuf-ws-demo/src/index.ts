import { Server } from 'protobuf-ws'
import { stockResponse } from './proto/stock';

const server = new Server(8080);

server.register("stock", ()=>{
    const stock = stockResponse.create({
        name:"test",
        price:100,
        time:new Date().toISOString()
    })

    return  stockResponse.encode(stock).finish();
})