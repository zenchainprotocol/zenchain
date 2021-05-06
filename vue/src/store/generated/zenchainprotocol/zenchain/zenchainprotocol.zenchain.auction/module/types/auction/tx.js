/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
export const protobufPackage = "zenchainprotocol.zenchain.auction";
const baseMsgCreateBid = { creator: "", OrderId: 0, BidPrice: "" };
export const MsgCreateBid = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.OrderId !== 0) {
            writer.uint32(16).uint64(message.OrderId);
        }
        if (message.BidPrice !== "") {
            writer.uint32(26).string(message.BidPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateBid };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.OrderId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.BidPrice = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateBid };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.OrderId !== undefined && object.OrderId !== null) {
            message.OrderId = Number(object.OrderId);
        }
        else {
            message.OrderId = 0;
        }
        if (object.BidPrice !== undefined && object.BidPrice !== null) {
            message.BidPrice = String(object.BidPrice);
        }
        else {
            message.BidPrice = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.OrderId !== undefined && (obj.OrderId = message.OrderId);
        message.BidPrice !== undefined && (obj.BidPrice = message.BidPrice);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateBid };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.OrderId !== undefined && object.OrderId !== null) {
            message.OrderId = object.OrderId;
        }
        else {
            message.OrderId = 0;
        }
        if (object.BidPrice !== undefined && object.BidPrice !== null) {
            message.BidPrice = object.BidPrice;
        }
        else {
            message.BidPrice = "";
        }
        return message;
    },
};
const baseMsgCreateBidResponse = { id: 0 };
export const MsgCreateBidResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateBidResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateBidResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateBidResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgUpdateBid = {
    creator: "",
    id: 0,
    OrderId: 0,
    BidPrice: "",
};
export const MsgUpdateBid = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateBid };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.OrderId = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgUpdateBid };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.OrderId !== undefined && object.OrderId !== null) {
            message.OrderId = Number(object.OrderId);
        }
        else {
            message.OrderId = 0;
        }
        if (object.BidPrice !== undefined && object.BidPrice !== null) {
            message.BidPrice = String(object.BidPrice);
        }
        else {
            message.BidPrice = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.OrderId !== undefined && (obj.OrderId = message.OrderId);
        message.BidPrice !== undefined && (obj.BidPrice = message.BidPrice);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateBid };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.OrderId !== undefined && object.OrderId !== null) {
            message.OrderId = object.OrderId;
        }
        else {
            message.OrderId = 0;
        }
        if (object.BidPrice !== undefined && object.BidPrice !== null) {
            message.BidPrice = object.BidPrice;
        }
        else {
            message.BidPrice = "";
        }
        return message;
    },
};
const baseMsgUpdateBidResponse = {};
export const MsgUpdateBidResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateBidResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgUpdateBidResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateBidResponse };
        return message;
    },
};
const baseMsgDeleteBid = { creator: "", id: 0 };
export const MsgDeleteBid = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteBid };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteBid };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteBid };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgDeleteBidResponse = {};
export const MsgDeleteBidResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteBidResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgDeleteBidResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteBidResponse };
        return message;
    },
};
const baseMsgCreateOrder = {
    creator: "",
    denomid: "",
    tokenid: "",
    startprice: "",
    stepprice: "",
    starttime: "",
    duration: "",
};
export const MsgCreateOrder = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateOrder };
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
    fromJSON(object) {
        const message = { ...baseMsgCreateOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.denomid !== undefined && object.denomid !== null) {
            message.denomid = String(object.denomid);
        }
        else {
            message.denomid = "";
        }
        if (object.tokenid !== undefined && object.tokenid !== null) {
            message.tokenid = String(object.tokenid);
        }
        else {
            message.tokenid = "";
        }
        if (object.startprice !== undefined && object.startprice !== null) {
            message.startprice = String(object.startprice);
        }
        else {
            message.startprice = "";
        }
        if (object.stepprice !== undefined && object.stepprice !== null) {
            message.stepprice = String(object.stepprice);
        }
        else {
            message.stepprice = "";
        }
        if (object.starttime !== undefined && object.starttime !== null) {
            message.starttime = String(object.starttime);
        }
        else {
            message.starttime = "";
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = String(object.duration);
        }
        else {
            message.duration = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.denomid !== undefined && (obj.denomid = message.denomid);
        message.tokenid !== undefined && (obj.tokenid = message.tokenid);
        message.startprice !== undefined && (obj.startprice = message.startprice);
        message.stepprice !== undefined && (obj.stepprice = message.stepprice);
        message.starttime !== undefined && (obj.starttime = message.starttime);
        message.duration !== undefined && (obj.duration = message.duration);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.denomid !== undefined && object.denomid !== null) {
            message.denomid = object.denomid;
        }
        else {
            message.denomid = "";
        }
        if (object.tokenid !== undefined && object.tokenid !== null) {
            message.tokenid = object.tokenid;
        }
        else {
            message.tokenid = "";
        }
        if (object.startprice !== undefined && object.startprice !== null) {
            message.startprice = object.startprice;
        }
        else {
            message.startprice = "";
        }
        if (object.stepprice !== undefined && object.stepprice !== null) {
            message.stepprice = object.stepprice;
        }
        else {
            message.stepprice = "";
        }
        if (object.starttime !== undefined && object.starttime !== null) {
            message.starttime = object.starttime;
        }
        else {
            message.starttime = "";
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = object.duration;
        }
        else {
            message.duration = "";
        }
        return message;
    },
};
const baseMsgCreateOrderResponse = { id: 0 };
export const MsgCreateOrderResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateOrderResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateOrderResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateOrderResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgUpdateOrder = {
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
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateOrder };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgUpdateOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.denomid !== undefined && object.denomid !== null) {
            message.denomid = String(object.denomid);
        }
        else {
            message.denomid = "";
        }
        if (object.tokenid !== undefined && object.tokenid !== null) {
            message.tokenid = String(object.tokenid);
        }
        else {
            message.tokenid = "";
        }
        if (object.startprice !== undefined && object.startprice !== null) {
            message.startprice = String(object.startprice);
        }
        else {
            message.startprice = "";
        }
        if (object.stepprice !== undefined && object.stepprice !== null) {
            message.stepprice = String(object.stepprice);
        }
        else {
            message.stepprice = "";
        }
        if (object.starttime !== undefined && object.starttime !== null) {
            message.starttime = String(object.starttime);
        }
        else {
            message.starttime = "";
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = String(object.duration);
        }
        else {
            message.duration = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = { ...baseMsgUpdateOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.denomid !== undefined && object.denomid !== null) {
            message.denomid = object.denomid;
        }
        else {
            message.denomid = "";
        }
        if (object.tokenid !== undefined && object.tokenid !== null) {
            message.tokenid = object.tokenid;
        }
        else {
            message.tokenid = "";
        }
        if (object.startprice !== undefined && object.startprice !== null) {
            message.startprice = object.startprice;
        }
        else {
            message.startprice = "";
        }
        if (object.stepprice !== undefined && object.stepprice !== null) {
            message.stepprice = object.stepprice;
        }
        else {
            message.stepprice = "";
        }
        if (object.starttime !== undefined && object.starttime !== null) {
            message.starttime = object.starttime;
        }
        else {
            message.starttime = "";
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = object.duration;
        }
        else {
            message.duration = "";
        }
        return message;
    },
};
const baseMsgUpdateOrderResponse = {};
export const MsgUpdateOrderResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateOrderResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgUpdateOrderResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateOrderResponse };
        return message;
    },
};
const baseMsgDeleteOrder = { creator: "", id: 0 };
export const MsgDeleteOrder = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteOrder };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgDeleteOrderResponse = {};
export const MsgDeleteOrderResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteOrderResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgDeleteOrderResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteOrderResponse };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateBid(request) {
        const data = MsgCreateBid.encode(request).finish();
        const promise = this.rpc.request("zenchainprotocol.zenchain.auction.Msg", "CreateBid", data);
        return promise.then((data) => MsgCreateBidResponse.decode(new Reader(data)));
    }
    UpdateBid(request) {
        const data = MsgUpdateBid.encode(request).finish();
        const promise = this.rpc.request("zenchainprotocol.zenchain.auction.Msg", "UpdateBid", data);
        return promise.then((data) => MsgUpdateBidResponse.decode(new Reader(data)));
    }
    DeleteBid(request) {
        const data = MsgDeleteBid.encode(request).finish();
        const promise = this.rpc.request("zenchainprotocol.zenchain.auction.Msg", "DeleteBid", data);
        return promise.then((data) => MsgDeleteBidResponse.decode(new Reader(data)));
    }
    CreateOrder(request) {
        const data = MsgCreateOrder.encode(request).finish();
        const promise = this.rpc.request("zenchainprotocol.zenchain.auction.Msg", "CreateOrder", data);
        return promise.then((data) => MsgCreateOrderResponse.decode(new Reader(data)));
    }
    UpdateOrder(request) {
        const data = MsgUpdateOrder.encode(request).finish();
        const promise = this.rpc.request("zenchainprotocol.zenchain.auction.Msg", "UpdateOrder", data);
        return promise.then((data) => MsgUpdateOrderResponse.decode(new Reader(data)));
    }
    DeleteOrder(request) {
        const data = MsgDeleteOrder.encode(request).finish();
        const promise = this.rpc.request("zenchainprotocol.zenchain.auction.Msg", "DeleteOrder", data);
        return promise.then((data) => MsgDeleteOrderResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
