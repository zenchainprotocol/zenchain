import { txClient, queryClient } from './module'
// @ts-ignore
import { SpVuexError } from '@starport/vuex'

import { Order } from "./module/types/auction/order"
import { Bid } from "./module/types/auction/bid"


async function initTxClient(vuexGetters) {
	return await txClient(vuexGetters['common/wallet/signer'], {
		addr: vuexGetters['common/env/apiTendermint']
	})
}

async function initQueryClient(vuexGetters) {
	return await queryClient({
		addr: vuexGetters['common/env/apiCosmos']
	})
}

function getStructure(template) {
	let structure = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field: any = {}
		field.name = key
		field.type = typeof value
		structure.fields.push(field)
	}
	return structure
}

const getDefaultState = () => {
	return {
        Bid: {},
        BidAll: {},
        Order: {},
        OrderAll: {},
        
        _Structure: {
            Order: getStructure(Order.fromPartial({})),
            Bid: getStructure(Bid.fromPartial({})),
            
		},
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(subscription)
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(subscription)
		}
	},
	getters: {
        getBid: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Bid[JSON.stringify(params)] ?? {}
		},
        getBidAll: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.BidAll[JSON.stringify(params)] ?? {}
		},
        getOrder: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Order[JSON.stringify(params)] ?? {}
		},
        getOrderAll: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.OrderAll[JSON.stringify(params)] ?? {}
		},
        
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('init')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach((subscription) => {
				dispatch(subscription.action, subscription.payload)
			})
		},
		async QueryBid({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryBid( key.id,  query)).data:(await (await initQueryClient(rootGetters)).queryBid( key.id )).data
				
				commit('QUERY', { query: 'Bid', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryBid', payload: { options: { all }, params: {...key},query }})
				return getters['getBid']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryBid', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryBidAll({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryBidAll( query)).data:(await (await initQueryClient(rootGetters)).queryBidAll()).data
				
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await (await initQueryClient(rootGetters)).queryBidAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					for (let prop of Object.keys(next_values)) {
						if (Array.isArray(next_values[prop])) {
							value[prop]=[...value[prop], ...next_values[prop]]
						}else{
							value[prop]=next_values[prop]
						}
					}
				}
				
				commit('QUERY', { query: 'BidAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryBidAll', payload: { options: { all }, params: {...key},query }})
				return getters['getBidAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryBidAll', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryOrder({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryOrder( key.id,  query)).data:(await (await initQueryClient(rootGetters)).queryOrder( key.id )).data
				
				commit('QUERY', { query: 'Order', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryOrder', payload: { options: { all }, params: {...key},query }})
				return getters['getOrder']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryOrder', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryOrderAll({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryOrderAll( query)).data:(await (await initQueryClient(rootGetters)).queryOrderAll()).data
				
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await (await initQueryClient(rootGetters)).queryOrderAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					for (let prop of Object.keys(next_values)) {
						if (Array.isArray(next_values[prop])) {
							value[prop]=[...value[prop], ...next_values[prop]]
						}else{
							value[prop]=next_values[prop]
						}
					}
				}
				
				commit('QUERY', { query: 'OrderAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryOrderAll', payload: { options: { all }, params: {...key},query }})
				return getters['getOrderAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryOrderAll', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		
		async sendMsgUpdateOrder({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdateOrder(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdateOrder:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdateOrder:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgUpdateBid({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdateBid(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdateBid:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdateBid:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgDeleteBid({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeleteBid(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeleteBid:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeleteBid:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgCreateOrder({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreateOrder(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreateOrder:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreateOrder:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgDeleteOrder({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeleteOrder(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeleteOrder:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeleteOrder:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgCreateBid({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreateBid(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreateBid:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreateBid:Send', 'Could not broadcast Tx.')
				}
			}
		},
		
		async MsgUpdateOrder({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdateOrder(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdateOrder:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdateOrder:Create', 'Could not create message.')
				}
			}
		},
		async MsgUpdateBid({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdateBid(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdateBid:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdateBid:Create', 'Could not create message.')
				}
			}
		},
		async MsgDeleteBid({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeleteBid(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeleteBid:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeleteBid:Create', 'Could not create message.')
				}
			}
		},
		async MsgCreateOrder({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreateOrder(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreateOrder:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreateOrder:Create', 'Could not create message.')
				}
			}
		},
		async MsgDeleteOrder({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeleteOrder(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeleteOrder:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeleteOrder:Create', 'Could not create message.')
				}
			}
		},
		async MsgCreateBid({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreateBid(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreateBid:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreateBid:Create', 'Could not create message.')
				}
			}
		},
		
	}
}
