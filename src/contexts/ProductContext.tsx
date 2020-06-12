import React, { createContext, useEffect, useReducer } from "react";
import {
	productReducer,
} from '../reducers/ProductReducer';

import { Product } from './../types/types';

type SetValue = (value: any) => void;

interface Products {
	products: Product[];
	dispatchProduct: SetValue;
}

export const ProductContext = createContext<Products>({
	products: [],
	dispatchProduct: (): void => { },
})

const ProductContextProvider: React.FC = props => {
	const [products, dispatchProduct] = useReducer(productReducer, [], () => {
		const localData = localStorage.getItem('products');
		return localData ? JSON.parse(localData) : [];
	});

	useEffect(() => {
		localStorage.setItem('products', JSON.stringify(products))
	}, [products])

	return (
		<ProductContext.Provider value={{ products, dispatchProduct }}>
			{props.children}
		</ProductContext.Provider>
	);
}

export default ProductContextProvider;