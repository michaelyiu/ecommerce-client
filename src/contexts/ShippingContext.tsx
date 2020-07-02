import React, { createContext, useEffect, useReducer } from 'react';
import { shippingReducer } from '../reducers/ShippingReducer';

import { ShippingInfo } from './../types/types';

type SetShipping = (value: any) => void;

interface Shipping {
	shippingInfo: ShippingInfo;
	dispatchShipping: SetShipping;
}

export const ShippingContext = createContext<Shipping>({
	shippingInfo: {
		firstname: '',
		lastname: '',
		address: '',
		city: '',
		province: '',
		postal: '',
		country: ''
	},
	dispatchShipping: (): void => { },
})

const ShippingContextProvider: React.FC = props => {
	const [shippingInfo, dispatchShipping] = useReducer(shippingReducer, {}, () => {
		const localData = localStorage.getItem('shipping');
		return localData ? JSON.parse(localData) : {};
	});

	useEffect(() => {
		localStorage.setItem('shipping', JSON.stringify(shippingInfo))
	}, [shippingInfo])

	return (
		<ShippingContext.Provider value={{ shippingInfo, dispatchShipping }}>
			{props.children}
		</ShippingContext.Provider>
	);
}

export default ShippingContextProvider;