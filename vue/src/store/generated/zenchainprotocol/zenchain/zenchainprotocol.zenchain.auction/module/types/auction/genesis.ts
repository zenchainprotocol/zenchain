/* eslint-disable */
import { Bid } from "../auction/bid";
import { Order } from "../auction/order";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "zenchainprotocol.zenchain.auction";

/** GenesisState defines the auction module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  bidList: Bid[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  orderList: Order[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.bidList) {
      Bid.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.orderList) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.bidList = [];
    message.orderList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.bidList.push(Bid.decode(reader, reader.uint32()));
          break;
        case 1:
          message.orderList.push(Order.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.bidList = [];
    message.orderList = [];
    if (object.bidList !== undefined && object.bidList !== null) {
      for (const e of object.bidList) {
        message.bidList.push(Bid.fromJSON(e));
      }
    }
    if (object.orderList !== undefined && object.orderList !== null) {
      for (const e of object.orderList) {
        message.orderList.push(Order.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.bidList) {
      obj.bidList = message.bidList.map((e) => (e ? Bid.toJSON(e) : undefined));
    } else {
      obj.bidList = [];
    }
    if (message.orderList) {
      obj.orderList = message.orderList.map((e) =>
        e ? Order.toJSON(e) : undefined
      );
    } else {
      obj.orderList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.bidList = [];
    message.orderList = [];
    if (object.bidList !== undefined && object.bidList !== null) {
      for (const e of object.bidList) {
        message.bidList.push(Bid.fromPartial(e));
      }
    }
    if (object.orderList !== undefined && object.orderList !== null) {
      for (const e of object.orderList) {
        message.orderList.push(Order.fromPartial(e));
      }
    }
    return message;
  },
};

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
