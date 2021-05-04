import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "zenchainprotocol.zenchain.auction";
export interface Order {
    creator: string;
    id: number;
    denomid: string;
    tokenid: string;
    startprice: string;
    stepprice: string;
    starttime: string;
    duration: string;
}
export declare const Order: {
    encode(message: Order, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Order;
    fromJSON(object: any): Order;
    toJSON(message: Order): unknown;
    fromPartial(object: DeepPartial<Order>): Order;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
