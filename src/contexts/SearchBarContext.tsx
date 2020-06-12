import React, { createContext, useEffect, useReducer } from "react";
import {
	searchReducer,
} from '../reducers/ProductReducer';

import { Product } from './../types/types';

type SetSearch = (value: any) => void;

interface Products {
	searchResult: Product[];
	dispatchSearch: SetSearch;
}

export const SearchContext = createContext<Products>({
	searchResult: [],
	dispatchSearch: (): void => { },
})

const SearchContextProvider: React.FC = props => {

	const [searchResult, dispatchSearch] = useReducer(searchReducer, []);

	useEffect(() => {
		localStorage.setItem('searchResult', JSON.stringify(searchResult))
	}, [searchResult])

	return (
		<SearchContext.Provider value={{ searchResult, dispatchSearch }}>
			{props.children}
		</SearchContext.Provider>
	);
}

export default SearchContextProvider;