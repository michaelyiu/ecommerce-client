import React, { createContext, useEffect, useReducer } from 'react';
import { billingReducer } from '../reducers/BillingReducer';

import { ShippingInfo } from './../types/types';

type SetBilling = (value: any) => void;

interface Billing {
	billingInfo: ShippingInfo;
	dispatchBilling: SetBilling;
}

export const BillingContext = createContext<Billing>({
	billingInfo: {
		firstname: '',
		lastname: '',
		address: '',
		city: '',
		province: '',
		postal: '',
		country: ''
	},
	dispatchBilling: (): void => { },
})

const BillingContextProvider: React.FC = props => {
	const [billingInfo, dispatchBilling] = useReducer(billingReducer, {}, () => {
		const localData = localStorage.getItem('billing');
		return localData ? JSON.parse(localData) : {};
	});

	useEffect(() => {
		localStorage.setItem('billing', JSON.stringify(billingInfo))
	}, [billingInfo])

	return (
		<BillingContext.Provider value={{ billingInfo, dispatchBilling }}>
			{props.children}
		</BillingContext.Provider>
	);
}

export default BillingContextProvider;