import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateOrder } from "./types/auction/tx";
import { MsgUpdateBid } from "./types/auction/tx";
import { MsgCreateOrder } from "./types/auction/tx";
import { MsgDeleteOrder } from "./types/auction/tx";
import { MsgDeleteBid } from "./types/auction/tx";
import { MsgCreateBid } from "./types/auction/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgUpdateOrder: (data: MsgUpdateOrder) => EncodeObject;
    msgUpdateBid: (data: MsgUpdateBid) => EncodeObject;
    msgCreateOrder: (data: MsgCreateOrder) => EncodeObject;
    msgDeleteOrder: (data: MsgDeleteOrder) => EncodeObject;
    msgDeleteBid: (data: MsgDeleteBid) => EncodeObject;
    msgCreateBid: (data: MsgCreateBid) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
