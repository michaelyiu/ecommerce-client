import React, { createContext, useState, useEffect } from "react";

import { Product } from './../types/types';

type SetProducts = (value: any) => void;
type SetSearch = (value: any) => void;
type SetFilter = (value: any) => void;

interface Products {
	products: Product[];
	setProducts: SetProducts;
	searchResult: Product[];
	setSearch: SetSearch;
	filterResult: Product[];
	setFilter: SetFilter;
}

export const ProductContext = createContext<Products>({
	products: [],
	setProducts: (): void => { },
	searchResult: [],
	setSearch: (): void => { },
	filterResult: [],
	setFilter: (): void => { },
})

const ProductContextProvider: React.FC = props => {
	const [products, setProducts] = useState(() => {
		const localData = localStorage.getItem('products');
		return localData ? JSON.parse(localData) : [];
	});

	const [searchResult, setSearch] = useState([]);
	const [filterResult, setFilter] = useState([]);

	useEffect(() => {
		localStorage.setItem('products', JSON.stringify(products))
	}, [products])

	useEffect(() => {
		localStorage.setItem('searchResult', JSON.stringify(searchResult))
	}, [searchResult])

	useEffect(() => {
		localStorage.setItem('filterResult', JSON.stringify(filterResult))
	}, [filterResult])

	return (
		<ProductContext.Provider value={{ products, setProducts, searchResult, setSearch, filterResult, setFilter }}>
			{props.children}
		</ProductContext.Provider>
	);
}

export default ProductContextProvider;