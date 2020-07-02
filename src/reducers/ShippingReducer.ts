import { ShippingInfo } from './../types/types';

type Action = {
	type: string;
	shipping: ShippingInfo
}

type State = ShippingInfo;

export const shippingReducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'SET_SHIPPING': {
			return action.shipping
		}
		default:
			return state
	}
}