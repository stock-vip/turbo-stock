import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a stockRequest. */
export interface IstockRequest {

    /** stockRequest name */
    name?: (string|null);
}

/** Represents a stockRequest. */
export class stockRequest implements IstockRequest {

    /**
     * Constructs a new stockRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IstockRequest);

    /** stockRequest name. */
    public name: string;

    /**
     * Creates a new stockRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns stockRequest instance
     */
    public static create(properties?: IstockRequest): stockRequest;

    /**
     * Encodes the specified stockRequest message. Does not implicitly {@link stockRequest.verify|verify} messages.
     * @param message stockRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IstockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified stockRequest message, length delimited. Does not implicitly {@link stockRequest.verify|verify} messages.
     * @param message stockRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IstockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a stockRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns stockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): stockRequest;

    /**
     * Decodes a stockRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns stockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): stockRequest;

    /**
     * Verifies a stockRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a stockRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns stockRequest
     */
    public static fromObject(object: { [k: string]: any }): stockRequest;

    /**
     * Creates a plain object from a stockRequest message. Also converts values to other types if specified.
     * @param message stockRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: stockRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this stockRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for stockRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a stockResponse. */
export interface IstockResponse {

    /** stockResponse name */
    name?: (string|null);

    /** stockResponse price */
    price?: (number|null);

    /** stockResponse time */
    time?: (string|null);
}

/** Represents a stockResponse. */
export class stockResponse implements IstockResponse {

    /**
     * Constructs a new stockResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IstockResponse);

    /** stockResponse name. */
    public name: string;

    /** stockResponse price. */
    public price: number;

    /** stockResponse time. */
    public time: string;

    /**
     * Creates a new stockResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns stockResponse instance
     */
    public static create(properties?: IstockResponse): stockResponse;

    /**
     * Encodes the specified stockResponse message. Does not implicitly {@link stockResponse.verify|verify} messages.
     * @param message stockResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IstockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified stockResponse message, length delimited. Does not implicitly {@link stockResponse.verify|verify} messages.
     * @param message stockResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IstockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a stockResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns stockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): stockResponse;

    /**
     * Decodes a stockResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns stockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): stockResponse;

    /**
     * Verifies a stockResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a stockResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns stockResponse
     */
    public static fromObject(object: { [k: string]: any }): stockResponse;

    /**
     * Creates a plain object from a stockResponse message. Also converts values to other types if specified.
     * @param message stockResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: stockResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this stockResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for stockResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a stockService */
export class stockService extends $protobuf.rpc.Service {

    /**
     * Constructs a new stockService service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new stockService service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): stockService;

    /**
     * Calls getStockPrice.
     * @param request stockRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and stockResponse
     */
    public getStockPrice(request: IstockRequest, callback: stockService.getStockPriceCallback): void;

    /**
     * Calls getStockPrice.
     * @param request stockRequest message or plain object
     * @returns Promise
     */
    public getStockPrice(request: IstockRequest): Promise<stockResponse>;

    /**
     * Calls getStockPricestream.
     * @param request stockRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and stockResponse
     */
    public getStockPricestream(request: IstockRequest, callback: stockService.getStockPricestreamCallback): void;

    /**
     * Calls getStockPricestream.
     * @param request stockRequest message or plain object
     * @returns Promise
     */
    public getStockPricestream(request: IstockRequest): Promise<stockResponse>;
}

export namespace stockService {

    /**
     * Callback as used by {@link stockService#getStockPrice}.
     * @param error Error, if any
     * @param [response] stockResponse
     */
    type getStockPriceCallback = (error: (Error|null), response?: stockResponse) => void;

    /**
     * Callback as used by {@link stockService#getStockPricestream}.
     * @param error Error, if any
     * @param [response] stockResponse
     */
    type getStockPricestreamCallback = (error: (Error|null), response?: stockResponse) => void;
}
