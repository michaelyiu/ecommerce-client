import React, { createContext, useEffect, useReducer } from "react";
import {
	filterReducer,
} from '../reducers/ProductReducer';

import { Product } from './../types/types';

type SetFilter = (value: any) => void;

interface Products {
	filterResult: Product[];
	dispatchFilter: SetFilter;
}

export const FilterContext = createContext<Products>({
	filterResult: [],
	dispatchFilter: (): void => { },
})

const FilterContextProvider: React.FC = props => {
	const [filterResult, dispatchFilter] = useReducer(filterReducer, []);

	useEffect(() => {
		localStorage.setItem('filterResult', JSON.stringify(filterResult))
	}, [filterResult])

	return (
		<FilterContext.Provider value={{ filterResult, dispatchFilter }}>
			{props.children}
		</FilterContext.Provider>
	);
}

export default FilterContextProvider;