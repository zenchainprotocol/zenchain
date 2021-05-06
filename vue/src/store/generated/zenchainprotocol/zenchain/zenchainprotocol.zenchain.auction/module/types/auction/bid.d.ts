import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "zenchainprotocol.zenchain.auction";
export interface Bid {
    creator: string;
    id: number;
    OrderId: number;
    BidPrice: string;
}
export declare const Bid: {
    encode(message: Bid, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Bid;
    fromJSON(object: any): Bid;
    toJSON(message: Bid): unknown;
    fromPartial(object: DeepPartial<Bid>): Bid;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
