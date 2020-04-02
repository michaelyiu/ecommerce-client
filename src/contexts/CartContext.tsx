import React, { createContext, useState, useEffect } from "react";

type SetCart = (value: any) => void;


interface ICart {
	id: string;
	orderedBy: string;
}

interface IOrder {
	cart: ICart
	// setCart: SetCart;
	changeCart: SetCart;
}

export const CartContext = createContext<IOrder>({

	cart: { id: '', orderedBy: '' },
	// setCart: (): void => { },
	changeCart: (): void => { },
})

const CartContextProvider: React.FC = props => {

	const [cart, setCart] = useState(() => {
		const localData = localStorage.getItem('cart');
		return localData ? JSON.parse(localData) : {};
	})

	const changeCart = (cart: ICart) => {
		setCart(cart);
	}


	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<CartContext.Provider value={{ cart, changeCart }}>
			{props.children}
		</CartContext.Provider>
	)
}

export default CartContextProvider;