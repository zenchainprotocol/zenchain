import { Reader, Writer } from "protobufjs/minimal";
import { Bid } from "../auction/bid";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Order } from "../auction/order";
export declare const protobufPackage = "zenchainprotocol.zenchain.auction";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetBidRequest {
    id: number;
}
export interface QueryGetBidResponse {
    Bid: Bid | undefined;
}
export interface QueryAllBidRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllBidResponse {
    Bid: Bid[];
    pagination: PageResponse | undefined;
}
export interface QueryGetOrderRequest {
    id: number;
}
export interface QueryGetOrderResponse {
    Order: Order | undefined;
}
export interface QueryAllOrderRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllOrderResponse {
    Order: Order[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetBidRequest: {
    encode(message: QueryGetBidRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBidRequest;
    fromJSON(object: any): QueryGetBidRequest;
    toJSON(message: QueryGetBidRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetBidRequest>): QueryGetBidRequest;
};
export declare const QueryGetBidResponse: {
    encode(message: QueryGetBidResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBidResponse;
    fromJSON(object: any): QueryGetBidResponse;
    toJSON(message: QueryGetBidResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetBidResponse>): QueryGetBidResponse;
};
export declare const QueryAllBidRequest: {
    encode(message: QueryAllBidRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBidRequest;
    fromJSON(object: any): QueryAllBidRequest;
    toJSON(message: QueryAllBidRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllBidRequest>): QueryAllBidRequest;
};
export declare const QueryAllBidResponse: {
    encode(message: QueryAllBidResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBidResponse;
    fromJSON(object: any): QueryAllBidResponse;
    toJSON(message: QueryAllBidResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllBidResponse>): QueryAllBidResponse;
};
export declare const QueryGetOrderRequest: {
    encode(message: QueryGetOrderRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetOrderRequest;
    fromJSON(object: any): QueryGetOrderRequest;
    toJSON(message: QueryGetOrderRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetOrderRequest>): QueryGetOrderRequest;
};
export declare const QueryGetOrderResponse: {
    encode(message: QueryGetOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetOrderResponse;
    fromJSON(object: any): QueryGetOrderResponse;
    toJSON(message: QueryGetOrderResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetOrderResponse>): QueryGetOrderResponse;
};
export declare const QueryAllOrderRequest: {
    encode(message: QueryAllOrderRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllOrderRequest;
    fromJSON(object: any): QueryAllOrderRequest;
    toJSON(message: QueryAllOrderRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllOrderRequest>): QueryAllOrderRequest;
};
export declare const QueryAllOrderResponse: {
    encode(message: QueryAllOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllOrderResponse;
    fromJSON(object: any): QueryAllOrderResponse;
    toJSON(message: QueryAllOrderResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllOrderResponse>): QueryAllOrderResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    Bid(request: QueryGetBidRequest): Promise<QueryGetBidResponse>;
    BidAll(request: QueryAllBidRequest): Promise<QueryAllBidResponse>;
    Order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse>;
    OrderAll(request: QueryAllOrderRequest): Promise<QueryAllOrderResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Bid(request: QueryGetBidRequest): Promise<QueryGetBidResponse>;
    BidAll(request: QueryAllBidRequest): Promise<QueryAllBidResponse>;
    Order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse>;
    OrderAll(request: QueryAllOrderRequest): Promise<QueryAllOrderResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
