import React, { createContext, useEffect, useReducer } from "react";
import {
	cartReducer,
	quantityReducer
} from '../reducers/CartReducer';
import { Product } from '../types/types';

type SetCart = (value: any) => void;
type SetQuantity = (value: any) => void;


interface Cart {
	cart: Product[];
	dispatchCart: SetCart;
	quantity: number;
	dispatchQuantity: SetQuantity;
}

export const CartContext = createContext<Cart>({
	cart: [],
	dispatchCart: (): void => { },
	quantity: 0,
	dispatchQuantity: (): void => { },
})

const CartContextProvider: React.FC = props => {

	const [cart, dispatchCart] = useReducer(cartReducer, [], () => {
		const localData = localStorage.getItem('cart');
		return localData ? JSON.parse(localData) : [];
	})

	const [quantity, dispatchQuantity] = useReducer(quantityReducer, 0, () => {
		const localData = localStorage.getItem('quantity');
		return localData ? JSON.parse(localData) : 0;
	})

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	useEffect(() => {
		localStorage.setItem('quantity', JSON.stringify(quantity))
	}, [quantity])

	return (
		<CartContext.Provider value={{ cart, quantity, dispatchCart, dispatchQuantity }}>
			{props.children}
		</CartContext.Provider>
	)
}

export default CartContextProvider;