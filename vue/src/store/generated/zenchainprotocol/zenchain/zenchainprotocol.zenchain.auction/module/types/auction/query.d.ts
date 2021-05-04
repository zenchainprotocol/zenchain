import { Reader, Writer } from "protobufjs/minimal";
import { Order } from "../auction/order";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "zenchainprotocol.zenchain.auction";
/** this line is used by starport scaffolding # 3 */
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
    Order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse>;
    OrderAll(request: QueryAllOrderRequest): Promise<QueryAllOrderResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
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
