/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "zenchainprotocol.zenchain.auction";

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

export interface MsgUpdateOrderResponse {}

export interface MsgDeleteOrder {
  creator: string;
  id: number;
}

export interface MsgDeleteOrderResponse {}

const baseMsgCreateOrder: object = {
  creator: "",
  denomid: "",
  tokenid: "",
  startprice: "",
  stepprice: "",
  starttime: "",
  duration: "",
};

export const MsgCreateOrder = {
  encode(message: MsgCreateOrder, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denomid !== "") {
      writer.uint32(18).string(message.denomid);
    }
    if (message.tokenid !== "") {
      writer.uint32(26).string(message.tokenid);
    }
    if (message.startprice !== "") {
      writer.uint32(34).string(message.startprice);
    }
    if (message.stepprice !== "") {
      writer.uint32(42).string(message.stepprice);
    }
    if (message.starttime !== "") {
      writer.uint32(50).string(message.starttime);
    }
    if (message.duration !== "") {
      writer.uint32(58).string(message.duration);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateOrder } as MsgCreateOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denomid = reader.string();
          break;
        case 3:
          message.tokenid = reader.string();
          break;
        case 4:
          message.startprice = reader.string();
          break;
        case 5:
          message.stepprice = reader.string();
          break;
        case 6:
          message.starttime = reader.string();
          break;
        case 7:
          message.duration = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateOrder {
    const message = { ...baseMsgCreateOrder } as MsgCreateOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.denomid !== undefined && object.denomid !== null) {
      message.denomid = String(object.denomid);
    } else {
      message.denomid = "";
    }
    if (object.tokenid !== undefined && object.tokenid !== null) {
      message.tokenid = String(object.tokenid);
    } else {
      message.tokenid = "";
    }
    if (object.startprice !== undefined && object.startprice !== null) {
      message.startprice = String(object.startprice);
    } else {
      message.startprice = "";
    }
    if (object.stepprice !== undefined && object.stepprice !== null) {
      message.stepprice = String(object.stepprice);
    } else {
      message.stepprice = "";
    }
    if (object.starttime !== undefined && object.starttime !== null) {
      message.starttime = String(object.starttime);
    } else {
      message.starttime = "";
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = String(object.duration);
    } else {
      message.duration = "";
    }
    return message;
  },

  toJSON(message: MsgCreateOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denomid !== undefined && (obj.denomid = message.denomid);
    message.tokenid !== undefined && (obj.tokenid = message.tokenid);
    message.startprice !== undefined && (obj.startprice = message.startprice);
    message.stepprice !== undefined && (obj.stepprice = message.stepprice);
    message.starttime !== undefined && (obj.starttime = message.starttime);
    message.duration !== undefined && (obj.duration = message.duration);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateOrder>): MsgCreateOrder {
    const message = { ...baseMsgCreateOrder } as MsgCreateOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.denomid !== undefined && object.denomid !== null) {
      message.denomid = object.denomid;
    } else {
      message.denomid = "";
    }
    if (object.tokenid !== undefined && object.tokenid !== null) {
      message.tokenid = object.tokenid;
    } else {
      message.tokenid = "";
    }
    if (object.startprice !== undefined && object.startprice !== null) {
      message.startprice = object.startprice;
    } else {
      message.startprice = "";
    }
    if (object.stepprice !== undefined && object.stepprice !== null) {
      message.stepprice = object.stepprice;
    } else {
      message.stepprice = "";
    }
    if (object.starttime !== undefined && object.starttime !== null) {
      message.starttime = object.starttime;
    } else {
      message.starttime = "";
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    } else {
      message.duration = "";
    }
    return message;
  },
};

const baseMsgCreateOrderResponse: object = { id: 0 };

export const MsgCreateOrderResponse = {
  encode(
    message: MsgCreateOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateOrderResponse } as MsgCreateOrderResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateOrderResponse {
    const message = { ...baseMsgCreateOrderResponse } as MsgCreateOrderResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateOrderResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateOrderResponse>
  ): MsgCreateOrderResponse {
    const message = { ...baseMsgCreateOrderResponse } as MsgCreateOrderResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateOrder: object = {
  creator: "",
  id: 0,
  denomid: "",
  tokenid: "",
  startprice: "",
  stepprice: "",
  starttime: "",
  duration: "",
};

export const MsgUpdateOrder = {
  encode(message: MsgUpdateOrder, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.denomid !== "") {
      writer.uint32(26).string(message.denomid);
    }
    if (message.tokenid !== "") {
      writer.uint32(34).string(message.tokenid);
    }
    if (message.startprice !== "") {
      writer.uint32(42).string(message.startprice);
    }
    if (message.stepprice !== "") {
      writer.uint32(50).string(message.stepprice);
    }
    if (message.starttime !== "") {
      writer.uint32(58).string(message.starttime);
    }
    if (message.duration !== "") {
      writer.uint32(66).string(message.duration);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateOrder } as MsgUpdateOrder;
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
          message.denomid = reader.string();
          break;
        case 4:
          message.tokenid = reader.string();
          break;
        case 5:
          message.startprice = reader.string();
          break;
        case 6:
          message.stepprice = reader.string();
          break;
        case 7:
          message.starttime = reader.string();
          break;
        case 8:
          message.duration = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateOrder {
    const message = { ...baseMsgUpdateOrder } as MsgUpdateOrder;
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
    if (object.denomid !== undefined && object.denomid !== null) {
      message.denomid = String(object.denomid);
    } else {
      message.denomid = "";
    }
    if (object.tokenid !== undefined && object.tokenid !== null) {
      message.tokenid = String(object.tokenid);
    } else {
      message.tokenid = "";
    }
    if (object.startprice !== undefined && object.startprice !== null) {
      message.startprice = String(object.startprice);
    } else {
      message.startprice = "";
    }
    if (object.stepprice !== undefined && object.stepprice !== null) {
      message.stepprice = String(object.stepprice);
    } else {
      message.stepprice = "";
    }
    if (object.starttime !== undefined && object.starttime !== null) {
      message.starttime = String(object.starttime);
    } else {
      message.starttime = "";
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = String(object.duration);
    } else {
      message.duration = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.denomid !== undefined && (obj.denomid = message.denomid);
    message.tokenid !== undefined && (obj.tokenid = message.tokenid);
    message.startprice !== undefined && (obj.startprice = message.startprice);
    message.stepprice !== undefined && (obj.stepprice = message.stepprice);
    message.starttime !== undefined && (obj.starttime = message.starttime);
    message.duration !== undefined && (obj.duration = message.duration);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateOrder>): MsgUpdateOrder {
    const message = { ...baseMsgUpdateOrder } as MsgUpdateOrder;
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
    if (object.denomid !== undefined && object.denomid !== null) {
      message.denomid = object.denomid;
    } else {
      message.denomid = "";
    }
    if (object.tokenid !== undefined && object.tokenid !== null) {
      message.tokenid = object.tokenid;
    } else {
      message.tokenid = "";
    }
    if (object.startprice !== undefined && object.startprice !== null) {
      message.startprice = object.startprice;
    } else {
      message.startprice = "";
    }
    if (object.stepprice !== undefined && object.stepprice !== null) {
      message.stepprice = object.stepprice;
    } else {
      message.stepprice = "";
    }
    if (object.starttime !== undefined && object.starttime !== null) {
      message.starttime = object.starttime;
    } else {
      message.starttime = "";
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    } else {
      message.duration = "";
    }
    return message;
  },
};

const baseMsgUpdateOrderResponse: object = {};

export const MsgUpdateOrderResponse = {
  encode(_: MsgUpdateOrderResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateOrderResponse } as MsgUpdateOrderResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateOrderResponse {
    const message = { ...baseMsgUpdateOrderResponse } as MsgUpdateOrderResponse;
    return message;
  },

  toJSON(_: MsgUpdateOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateOrderResponse>): MsgUpdateOrderResponse {
    const message = { ...baseMsgUpdateOrderResponse } as MsgUpdateOrderResponse;
    return message;
  },
};

const baseMsgDeleteOrder: object = { creator: "", id: 0 };

export const MsgDeleteOrder = {
  encode(message: MsgDeleteOrder, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteOrder } as MsgDeleteOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteOrder {
    const message = { ...baseMsgDeleteOrder } as MsgDeleteOrder;
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
    return message;
  },

  toJSON(message: MsgDeleteOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteOrder>): MsgDeleteOrder {
    const message = { ...baseMsgDeleteOrder } as MsgDeleteOrder;
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
    return message;
  },
};

const baseMsgDeleteOrderResponse: object = {};

export const MsgDeleteOrderResponse = {
  encode(_: MsgDeleteOrderResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteOrderResponse } as MsgDeleteOrderResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteOrderResponse {
    const message = { ...baseMsgDeleteOrderResponse } as MsgDeleteOrderResponse;
    return message;
  },

  toJSON(_: MsgDeleteOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteOrderResponse>): MsgDeleteOrderResponse {
    const message = { ...baseMsgDeleteOrderResponse } as MsgDeleteOrderResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
  UpdateOrder(request: MsgUpdateOrder): Promise<MsgUpdateOrderResponse>;
  DeleteOrder(request: MsgDeleteOrder): Promise<MsgDeleteOrderResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse> {
    const data = MsgCreateOrder.encode(request).finish();
    const promise = this.rpc.request(
      "zenchainprotocol.zenchain.auction.Msg",
      "CreateOrder",
      data
    );
    return promise.then((data) =>
      MsgCreateOrderResponse.decode(new Reader(data))
    );
  }

  UpdateOrder(request: MsgUpdateOrder): Promise<MsgUpdateOrderResponse> {
    const data = MsgUpdateOrder.encode(request).finish();
    const promise = this.rpc.request(
      "zenchainprotocol.zenchain.auction.Msg",
      "UpdateOrder",
      data
    );
    return promise.then((data) =>
      MsgUpdateOrderResponse.decode(new Reader(data))
    );
  }

  DeleteOrder(request: MsgDeleteOrder): Promise<MsgDeleteOrderResponse> {
    const data = MsgDeleteOrder.encode(request).finish();
    const promise = this.rpc.request(
      "zenchainprotocol.zenchain.auction.Msg",
      "DeleteOrder",
      data
    );
    return promise.then((data) =>
      MsgDeleteOrderResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
