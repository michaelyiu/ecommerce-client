import { ShippingInfo } from './../types/types';

type Action = {
	type: string;
	billing: ShippingInfo
}

type State = ShippingInfo;

export const billingReducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'SET_BILLING': {
			return action.billing
		}
		default:
			return state
	}
}