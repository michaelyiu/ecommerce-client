import React, { createContext, useState } from "react";

import { Product } from './../types/types';

type SetProducts = (value: any) => void;

interface Products {
	products: Array<Product>
	setProducts: SetProducts
}

export const ProductContext = createContext<Products>({
	products: [],
	setProducts: (): void => { },
})

const ProductContextProvider: React.FC = props => {
	const [products, setProducts] = useState(() => {
		const localData = localStorage.getItem('post');
		return localData ? JSON.parse(localData) : [];
	});

	return (
		<ProductContext.Provider value={{ products, setProducts }}>
			{props.children}
		</ProductContext.Provider>
	);
}

export default ProductContextProvider;