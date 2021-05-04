// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteOrder } from "./types/auction/tx";
import { MsgUpdateOrder } from "./types/auction/tx";
import { MsgCreateOrder } from "./types/auction/tx";
const types = [
    ["/zenchainprotocol.zenchain.auction.MsgDeleteOrder", MsgDeleteOrder],
    ["/zenchainprotocol.zenchain.auction.MsgUpdateOrder", MsgUpdateOrder],
    ["/zenchainprotocol.zenchain.auction.MsgCreateOrder", MsgCreateOrder],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgDeleteOrder: (data) => ({ typeUrl: "/zenchainprotocol.zenchain.auction.MsgDeleteOrder", value: data }),
        msgUpdateOrder: (data) => ({ typeUrl: "/zenchainprotocol.zenchain.auction.MsgUpdateOrder", value: data }),
        msgCreateOrder: (data) => ({ typeUrl: "/zenchainprotocol.zenchain.auction.MsgCreateOrder", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
