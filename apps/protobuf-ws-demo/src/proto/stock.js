/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.stockRequest = (function() {
    
        /**
         * Properties of a stockRequest.
         * @exports IstockRequest
         * @interface IstockRequest
         * @property {string|null} [name] stockRequest name
         */
    
        /**
         * Constructs a new stockRequest.
         * @exports stockRequest
         * @classdesc Represents a stockRequest.
         * @implements IstockRequest
         * @constructor
         * @param {IstockRequest=} [properties] Properties to set
         */
        function stockRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * stockRequest name.
         * @member {string} name
         * @memberof stockRequest
         * @instance
         */
        stockRequest.prototype.name = "";
    
        /**
         * Creates a new stockRequest instance using the specified properties.
         * @function create
         * @memberof stockRequest
         * @static
         * @param {IstockRequest=} [properties] Properties to set
         * @returns {stockRequest} stockRequest instance
         */
        stockRequest.create = function create(properties) {
            return new stockRequest(properties);
        };
    
        /**
         * Encodes the specified stockRequest message. Does not implicitly {@link stockRequest.verify|verify} messages.
         * @function encode
         * @memberof stockRequest
         * @static
         * @param {IstockRequest} message stockRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        stockRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };
    
        /**
         * Encodes the specified stockRequest message, length delimited. Does not implicitly {@link stockRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof stockRequest
         * @static
         * @param {IstockRequest} message stockRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        stockRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a stockRequest message from the specified reader or buffer.
         * @function decode
         * @memberof stockRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {stockRequest} stockRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        stockRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.stockRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a stockRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof stockRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {stockRequest} stockRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        stockRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a stockRequest message.
         * @function verify
         * @memberof stockRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        stockRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };
    
        /**
         * Creates a stockRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof stockRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {stockRequest} stockRequest
         */
        stockRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.stockRequest)
                return object;
            var message = new $root.stockRequest();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };
    
        /**
         * Creates a plain object from a stockRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof stockRequest
         * @static
         * @param {stockRequest} message stockRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        stockRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };
    
        /**
         * Converts this stockRequest to JSON.
         * @function toJSON
         * @memberof stockRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        stockRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for stockRequest
         * @function getTypeUrl
         * @memberof stockRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        stockRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/stockRequest";
        };
    
        return stockRequest;
    })();
    
    $root.stockResponse = (function() {
    
        /**
         * Properties of a stockResponse.
         * @exports IstockResponse
         * @interface IstockResponse
         * @property {string|null} [name] stockResponse name
         * @property {number|null} [price] stockResponse price
         * @property {string|null} [time] stockResponse time
         */
    
        /**
         * Constructs a new stockResponse.
         * @exports stockResponse
         * @classdesc Represents a stockResponse.
         * @implements IstockResponse
         * @constructor
         * @param {IstockResponse=} [properties] Properties to set
         */
        function stockResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * stockResponse name.
         * @member {string} name
         * @memberof stockResponse
         * @instance
         */
        stockResponse.prototype.name = "";
    
        /**
         * stockResponse price.
         * @member {number} price
         * @memberof stockResponse
         * @instance
         */
        stockResponse.prototype.price = 0;
    
        /**
         * stockResponse time.
         * @member {string} time
         * @memberof stockResponse
         * @instance
         */
        stockResponse.prototype.time = "";
    
        /**
         * Creates a new stockResponse instance using the specified properties.
         * @function create
         * @memberof stockResponse
         * @static
         * @param {IstockResponse=} [properties] Properties to set
         * @returns {stockResponse} stockResponse instance
         */
        stockResponse.create = function create(properties) {
            return new stockResponse(properties);
        };
    
        /**
         * Encodes the specified stockResponse message. Does not implicitly {@link stockResponse.verify|verify} messages.
         * @function encode
         * @memberof stockResponse
         * @static
         * @param {IstockResponse} message stockResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        stockResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.price);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.time);
            return writer;
        };
    
        /**
         * Encodes the specified stockResponse message, length delimited. Does not implicitly {@link stockResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof stockResponse
         * @static
         * @param {IstockResponse} message stockResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        stockResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a stockResponse message from the specified reader or buffer.
         * @function decode
         * @memberof stockResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {stockResponse} stockResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        stockResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.stockResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.price = reader.float();
                        break;
                    }
                case 3: {
                        message.time = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a stockResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof stockResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {stockResponse} stockResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        stockResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a stockResponse message.
         * @function verify
         * @memberof stockResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        stockResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (typeof message.price !== "number")
                    return "price: number expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isString(message.time))
                    return "time: string expected";
            return null;
        };
    
        /**
         * Creates a stockResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof stockResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {stockResponse} stockResponse
         */
        stockResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.stockResponse)
                return object;
            var message = new $root.stockResponse();
            if (object.name != null)
                message.name = String(object.name);
            if (object.price != null)
                message.price = Number(object.price);
            if (object.time != null)
                message.time = String(object.time);
            return message;
        };
    
        /**
         * Creates a plain object from a stockResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof stockResponse
         * @static
         * @param {stockResponse} message stockResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        stockResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.price = 0;
                object.time = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = options.json && !isFinite(message.price) ? String(message.price) : message.price;
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            return object;
        };
    
        /**
         * Converts this stockResponse to JSON.
         * @function toJSON
         * @memberof stockResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        stockResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for stockResponse
         * @function getTypeUrl
         * @memberof stockResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        stockResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/stockResponse";
        };
    
        return stockResponse;
    })();
    
    $root.stockService = (function() {
    
        /**
         * Constructs a new stockService service.
         * @exports stockService
         * @classdesc Represents a stockService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function stockService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (stockService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = stockService;
    
        /**
         * Creates new stockService service using the specified rpc implementation.
         * @function create
         * @memberof stockService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {stockService} RPC service. Useful where requests and/or responses are streamed.
         */
        stockService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link stockService#getStockPrice}.
         * @memberof stockService
         * @typedef getStockPriceCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {stockResponse} [response] stockResponse
         */
    
        /**
         * Calls getStockPrice.
         * @function getStockPrice
         * @memberof stockService
         * @instance
         * @param {IstockRequest} request stockRequest message or plain object
         * @param {stockService.getStockPriceCallback} callback Node-style callback called with the error, if any, and stockResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(stockService.prototype.getStockPrice = function getStockPrice(request, callback) {
            return this.rpcCall(getStockPrice, $root.stockRequest, $root.stockResponse, request, callback);
        }, "name", { value: "getStockPrice" });
    
        /**
         * Calls getStockPrice.
         * @function getStockPrice
         * @memberof stockService
         * @instance
         * @param {IstockRequest} request stockRequest message or plain object
         * @returns {Promise<stockResponse>} Promise
         * @variation 2
         */
    
        return stockService;
    })();

    return $root;
});
