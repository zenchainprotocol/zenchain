import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "zenchainprotocol.zenchain.auction";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateOrder {
    creator: string;
    denomid: string;
    tokenid: string;
    startprice: string;
    stepprice: string;
    starttime: string;
    duration: string;
}
export interface MsgCreateOrderResponse {
    id: number;
}
export interface MsgUpdateOrder {
    creator: string;
    id: number;
    denomid: string;
    tokenid: string;
    startprice: string;
    stepprice: string;
    starttime: string;
    duration: string;
}
export interface MsgUpdateOrderResponse {
}
export interface MsgDeleteOrder {
    creator: string;
    id: number;
}
export interface MsgDeleteOrderResponse {
}
export declare const MsgCreateOrder: {
    encode(message: MsgCreateOrder, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateOrder;
    fromJSON(object: any): MsgCreateOrder;
    toJSON(message: MsgCreateOrder): unknown;
    fromPartial(object: DeepPartial<MsgCreateOrder>): MsgCreateOrder;
};
export declare const MsgCreateOrderResponse: {
    encode(message: MsgCreateOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateOrderResponse;
    fromJSON(object: any): MsgCreateOrderResponse;
    toJSON(message: MsgCreateOrderResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateOrderResponse>): MsgCreateOrderResponse;
};
export declare const MsgUpdateOrder: {
    encode(message: MsgUpdateOrder, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateOrder;
    fromJSON(object: any): MsgUpdateOrder;
    toJSON(message: MsgUpdateOrder): unknown;
    fromPartial(object: DeepPartial<MsgUpdateOrder>): MsgUpdateOrder;
};
export declare const MsgUpdateOrderResponse: {
    encode(_: MsgUpdateOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateOrderResponse;
    fromJSON(_: any): MsgUpdateOrderResponse;
    toJSON(_: MsgUpdateOrderResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateOrderResponse>): MsgUpdateOrderResponse;
};
export declare const MsgDeleteOrder: {
    encode(message: MsgDeleteOrder, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteOrder;
    fromJSON(object: any): MsgDeleteOrder;
    toJSON(message: MsgDeleteOrder): unknown;
    fromPartial(object: DeepPartial<MsgDeleteOrder>): MsgDeleteOrder;
};
export declare const MsgDeleteOrderResponse: {
    encode(_: MsgDeleteOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteOrderResponse;
    fromJSON(_: any): MsgDeleteOrderResponse;
    toJSON(_: MsgDeleteOrderResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteOrderResponse>): MsgDeleteOrderResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
    UpdateOrder(request: MsgUpdateOrder): Promise<MsgUpdateOrderResponse>;
    DeleteOrder(request: MsgDeleteOrder): Promise<MsgDeleteOrderResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
    UpdateOrder(request: MsgUpdateOrder): Promise<MsgUpdateOrderResponse>;
    DeleteOrder(request: MsgDeleteOrder): Promise<MsgDeleteOrderResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
