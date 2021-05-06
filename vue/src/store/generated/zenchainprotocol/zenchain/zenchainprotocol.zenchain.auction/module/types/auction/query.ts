/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Bid } from "../auction/bid";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Order } from "../auction/order";

export const protobufPackage = "zenchainprotocol.zenchain.auction";

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

const baseQueryGetBidRequest: object = { id: 0 };

export const QueryGetBidRequest = {
  encode(
    message: QueryGetBidRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBidRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBidRequest } as QueryGetBidRequest;
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

  fromJSON(object: any): QueryGetBidRequest {
    const message = { ...baseQueryGetBidRequest } as QueryGetBidRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetBidRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetBidRequest>): QueryGetBidRequest {
    const message = { ...baseQueryGetBidRequest } as QueryGetBidRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetBidResponse: object = {};

export const QueryGetBidResponse = {
  encode(
    message: QueryGetBidResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Bid !== undefined) {
      Bid.encode(message.Bid, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBidResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBidResponse } as QueryGetBidResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Bid = Bid.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBidResponse {
    const message = { ...baseQueryGetBidResponse } as QueryGetBidResponse;
    if (object.Bid !== undefined && object.Bid !== null) {
      message.Bid = Bid.fromJSON(object.Bid);
    } else {
      message.Bid = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBidResponse): unknown {
    const obj: any = {};
    message.Bid !== undefined &&
      (obj.Bid = message.Bid ? Bid.toJSON(message.Bid) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetBidResponse>): QueryGetBidResponse {
    const message = { ...baseQueryGetBidResponse } as QueryGetBidResponse;
    if (object.Bid !== undefined && object.Bid !== null) {
      message.Bid = Bid.fromPartial(object.Bid);
    } else {
      message.Bid = undefined;
    }
    return message;
  },
};

const baseQueryAllBidRequest: object = {};

export const QueryAllBidRequest = {
  encode(
    message: QueryAllBidRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBidRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBidRequest } as QueryAllBidRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBidRequest {
    const message = { ...baseQueryAllBidRequest } as QueryAllBidRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBidRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllBidRequest>): QueryAllBidRequest {
    const message = { ...baseQueryAllBidRequest } as QueryAllBidRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBidResponse: object = {};

export const QueryAllBidResponse = {
  encode(
    message: QueryAllBidResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Bid) {
      Bid.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBidResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBidResponse } as QueryAllBidResponse;
    message.Bid = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Bid.push(Bid.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBidResponse {
    const message = { ...baseQueryAllBidResponse } as QueryAllBidResponse;
    message.Bid = [];
    if (object.Bid !== undefined && object.Bid !== null) {
      for (const e of object.Bid) {
        message.Bid.push(Bid.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBidResponse): unknown {
    const obj: any = {};
    if (message.Bid) {
      obj.Bid = message.Bid.map((e) => (e ? Bid.toJSON(e) : undefined));
    } else {
      obj.Bid = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllBidResponse>): QueryAllBidResponse {
    const message = { ...baseQueryAllBidResponse } as QueryAllBidResponse;
    message.Bid = [];
    if (object.Bid !== undefined && object.Bid !== null) {
      for (const e of object.Bid) {
        message.Bid.push(Bid.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetOrderRequest: object = { id: 0 };

export const QueryGetOrderRequest = {
  encode(
    message: QueryGetOrderRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetOrderRequest } as QueryGetOrderRequest;
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

  fromJSON(object: any): QueryGetOrderRequest {
    const message = { ...baseQueryGetOrderRequest } as QueryGetOrderRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetOrderRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetOrderRequest>): QueryGetOrderRequest {
    const message = { ...baseQueryGetOrderRequest } as QueryGetOrderRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetOrderResponse: object = {};

export const QueryGetOrderResponse = {
  encode(
    message: QueryGetOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Order !== undefined) {
      Order.encode(message.Order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetOrderResponse } as QueryGetOrderResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOrderResponse {
    const message = { ...baseQueryGetOrderResponse } as QueryGetOrderResponse;
    if (object.Order !== undefined && object.Order !== null) {
      message.Order = Order.fromJSON(object.Order);
    } else {
      message.Order = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetOrderResponse): unknown {
    const obj: any = {};
    message.Order !== undefined &&
      (obj.Order = message.Order ? Order.toJSON(message.Order) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOrderResponse>
  ): QueryGetOrderResponse {
    const message = { ...baseQueryGetOrderResponse } as QueryGetOrderResponse;
    if (object.Order !== undefined && object.Order !== null) {
      message.Order = Order.fromPartial(object.Order);
    } else {
      message.Order = undefined;
    }
    return message;
  },
};

const baseQueryAllOrderRequest: object = {};

export const QueryAllOrderRequest = {
  encode(
    message: QueryAllOrderRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllOrderRequest } as QueryAllOrderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllOrderRequest {
    const message = { ...baseQueryAllOrderRequest } as QueryAllOrderRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllOrderRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllOrderRequest>): QueryAllOrderRequest {
    const message = { ...baseQueryAllOrderRequest } as QueryAllOrderRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllOrderResponse: object = {};

export const QueryAllOrderResponse = {
  encode(
    message: QueryAllOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Order) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllOrderResponse } as QueryAllOrderResponse;
    message.Order = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Order.push(Order.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllOrderResponse {
    const message = { ...baseQueryAllOrderResponse } as QueryAllOrderResponse;
    message.Order = [];
    if (object.Order !== undefined && object.Order !== null) {
      for (const e of object.Order) {
        message.Order.push(Order.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllOrderResponse): unknown {
    const obj: any = {};
    if (message.Order) {
      obj.Order = message.Order.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.Order = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllOrderResponse>
  ): QueryAllOrderResponse {
    const message = { ...baseQueryAllOrderResponse } as QueryAllOrderResponse;
    message.Order = [];
    if (object.Order !== undefined && object.Order !== null) {
      for (const e of object.Order) {
        message.Order.push(Order.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Bid(request: QueryGetBidRequest): Promise<QueryGetBidResponse>;
  BidAll(request: QueryAllBidRequest): Promise<QueryAllBidResponse>;
  Order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse>;
  OrderAll(request: QueryAllOrderRequest): Promise<QueryAllOrderResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Bid(request: QueryGetBidRequest): Promise<QueryGetBidResponse> {
    const data = QueryGetBidRequest.encode(request).finish();
    const promise = this.rpc.request(
      "zenchainprotocol.zenchain.auction.Query",
      "Bid",
      data
    );
    return promise.then((data) => QueryGetBidResponse.decode(new Reader(data)));
  }

  BidAll(request: QueryAllBidRequest): Promise<QueryAllBidResponse> {
    const data = QueryAllBidRequest.encode(request).finish();
    const promise = this.rpc.request(
      "zenchainprotocol.zenchain.auction.Query",
      "BidAll",
      data
    );
    return promise.then((data) => QueryAllBidResponse.decode(new Reader(data)));
  }

  Order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse> {
    const data = QueryGetOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "zenchainprotocol.zenchain.auction.Query",
      "Order",
      data
    );
    return promise.then((data) =>
      QueryGetOrderResponse.decode(new Reader(data))
    );
  }

  OrderAll(request: QueryAllOrderRequest): Promise<QueryAllOrderResponse> {
    const data = QueryAllOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "zenchainprotocol.zenchain.auction.Query",
      "OrderAll",
      data
    );
    return promise.then((data) =>
      QueryAllOrderResponse.decode(new Reader(data))
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
