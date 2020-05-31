import React, { createContext, useState, useEffect } from "react";
import { Product } from './../types/types';

type SetCart = (value: any) => void;
type ClearCart = () => void;

interface Cart {
	cart: Product[]
	addToCart: SetCart;
	addManyToCart: SetCart;
	clearCart: ClearCart;
}

export const CartContext = createContext<Cart>({
	cart: [],
	addToCart: (): void => { },
	addManyToCart: (): void => { },
	clearCart: (): void => { }
})

const CartContextProvider: React.FC = props => {

	const [cart, setCart] = useState(() => {
		const localData = localStorage.getItem('cart');
		return localData ? JSON.parse(localData) : [];
	})

	const addToCart = (item: Product) => {
		let cartCopy: Product[] = cart;

		const itemToUpdate = cartCopy.find((oldItem: Product) => item.id === oldItem.id)
		const itemIndex = cartCopy.findIndex((oldItem: Product) => item.id === oldItem.id)

		if (!itemToUpdate) {
			let updatedItem = Object.assign({}, item, { quantity: 1 })
			const newCart = [...cart, updatedItem]
			setCart(newCart);
		}
		else {
			itemToUpdate.quantity++;
			cartCopy.splice(itemIndex, 1, itemToUpdate);
			setCart(cart.splice(0, cart.length, ...cartCopy))
		}
	}

	const addManyToCart = (items: Product[]) => {
		setCart(items);
	}

	const clearCart = () => {
		const emptyArray: Product[] = [];
		setCart(emptyArray);
	}


	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		// <CartContext.Provider value={{ cart, changeCart }}>
		<CartContext.Provider value={{ cart, addToCart, addManyToCart, clearCart }}>
			{props.children}
		</CartContext.Provider>
	)
}

export default CartContextProvider;