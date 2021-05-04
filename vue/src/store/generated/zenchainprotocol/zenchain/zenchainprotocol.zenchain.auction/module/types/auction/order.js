/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "zenchainprotocol.zenchain.auction";
const baseOrder = {
    creator: "",
    id: 0,
    denomid: "",
    tokenid: "",
    startprice: "",
    stepprice: "",
    starttime: "",
    duration: "",
};
export const Order = {
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
        const message = { ...baseOrder };
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
        const message = { ...baseOrder };
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
        const message = { ...baseOrder };
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
