import React, { createContext, useState, useEffect } from "react";
import { Product } from './../types/types';

type SetCart = (value: any) => void;
type ClearCart = () => void;
type EditQuantity = (value: string, value2: number) => void;
type RemoveFromCart = (id: string) => void;
type SetQuantity = (value: any) => void;
type SumQtyCart = () => void;


interface Cart {
	cart: Product[];
	addToCart: SetCart;
	addManyToCart: SetCart;
	clearCart: ClearCart;
	editQuantity: EditQuantity;
	removeFromCart: RemoveFromCart;
	quantity: number;
	setQuantity: SetQuantity;
	sumQtyCart: SumQtyCart;
}

export const CartContext = createContext<Cart>({
	cart: [],
	addToCart: (): void => { },
	addManyToCart: (): void => { },
	clearCart: (): void => { },
	editQuantity: (): void => { },
	removeFromCart: (): void => { },
	quantity: 0,
	setQuantity: (): void => { },
	sumQtyCart: (): void => { }
})

const CartContextProvider: React.FC = props => {

	const [cart, setCart] = useState(() => {
		const localData = localStorage.getItem('cart');
		return localData ? JSON.parse(localData) : [];
	})

	const [quantity, setQuantity] = useState(() => {
		const localData = localStorage.getItem('quantity');
		return localData ? JSON.parse(localData) : 0;
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

	const editQuantity = (id: string, quantity: number) => {
		const cartCopy: Product[] = cart;
		const itemToUpdate = cartCopy.find((item: Product) => item.id === id);
		const itemToUpdateIndex: number = cartCopy.findIndex((item: Product) => item.id === id);

		if (itemToUpdate) {
			itemToUpdate.quantity = quantity;
			cartCopy[itemToUpdateIndex] = itemToUpdate;
			setCart(cart.splice(0, cart.length, ...cartCopy));
		}
	}

	const removeFromCart = (id: string) => {
		const cartAfterRemoval = cart.splice(cart.findIndex((item: Product) => id), 1)
		setCart(cart.splice(0, cart.length, ...cartAfterRemoval))
		console.log(cart)
	}

	const sumQtyCart = () => {
		let sum: number = 0;
		for (let i = 0; i < cart.length; i++) {
			sum = sum + +cart[i].quantity
		}
		setQuantity(sum);
	}


	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	useEffect(() => {
		localStorage.setItem('quantity', JSON.stringify(quantity))
	}, [quantity])

	return (
		<CartContext.Provider value={{ cart, addToCart, addManyToCart, clearCart, editQuantity, removeFromCart, quantity, setQuantity, sumQtyCart }}>
			{props.children}
		</CartContext.Provider>
	)
}

export default CartContextProvider;