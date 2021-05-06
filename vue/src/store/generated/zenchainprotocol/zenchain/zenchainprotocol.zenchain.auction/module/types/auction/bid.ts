/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "zenchainprotocol.zenchain.auction";

export interface Bid {
  creator: string;
  id: number;
  OrderId: number;
  BidPrice: string;
}

const baseBid: object = { creator: "", id: 0, OrderId: 0, BidPrice: "" };

export const Bid = {
  encode(message: Bid, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.OrderId !== 0) {
      writer.uint32(24).uint64(message.OrderId);
    }
    if (message.BidPrice !== "") {
      writer.uint32(34).string(message.BidPrice);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Bid {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBid } as Bid;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.OrderId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.BidPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Bid {
    const message = { ...baseBid } as Bid;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.OrderId !== undefined && object.OrderId !== null) {
      message.OrderId = Number(object.OrderId);
    } else {
      message.OrderId = 0;
    }
    if (object.BidPrice !== undefined && object.BidPrice !== null) {
      message.BidPrice = String(object.BidPrice);
    } else {
      message.BidPrice = "";
    }
    return message;
  },

  toJSON(message: Bid): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.OrderId !== undefined && (obj.OrderId = message.OrderId);
    message.BidPrice !== undefined && (obj.BidPrice = message.BidPrice);
    return obj;
  },

  fromPartial(object: DeepPartial<Bid>): Bid {
    const message = { ...baseBid } as Bid;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.OrderId !== undefined && object.OrderId !== null) {
      message.OrderId = object.OrderId;
    } else {
      message.OrderId = 0;
    }
    if (object.BidPrice !== undefined && object.BidPrice !== null) {
      message.BidPrice = object.BidPrice;
    } else {
      message.BidPrice = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
