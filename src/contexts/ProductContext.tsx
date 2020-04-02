import React, { createContext, useState } from "react";

type SetProducts = (value: any) => void;

interface IProduct {
	id: string
	name: String
	price: Number
	category: String
	image: String
	description: String
}

// interface IProducts extends Array<IProduct> { }

interface IProducts {
	products: Array<IProduct>
	setProducts: SetProducts
}


export const ProductContext = createContext<IProducts>({
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