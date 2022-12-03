import { Server } from 'protobuf-ws';
import md5 from 'md5'
import { interval, Subject, take } from 'rxjs';
import { stockRequest, stockResponse } from './apps/protobuf-ws-demo/src/proto/stock';

const server = new Server(8080);
server.register('stock.getStockPrice', input=>{
	console.log(stockRequest.decode(input!).toJSON())
    const stock = stockResponse.create({
        name:"test",
        price:100,
        time:new Date().toISOString()
    })

	const data = stockResponse.encode(stock).finish();
	return data
})

server.registerStream('stock.getStockPrice', input=>{
    let subject = new Subject<Uint8Array>();
    interval(1000).pipe(take(10)).subscribe(()=>{
        const stock = stockResponse.create({
            name:"test",
            price:100,
            time:new Date().toISOString()
        })
        subject.next(stockResponse.encode(stock).finish())
    })
    return subject.asObservable()
})