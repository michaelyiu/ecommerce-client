import { Product } from './../types/types';

type Action = {
	type: string;
	products: Product[]
}

type State = Product[];

// export const productReducer = (state: any, action: any) => {
export const productReducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'SET_PRODUCTS':
			return [...action.products];
		default:
			return state;
	}
}

export const searchReducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'SET_SEARCH':
			return [...action.products];
		default:
			return [...state];
	}
}

export const filterReducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'SET_FILTER':
			return [...action.products];
		default:
			return [...state];
	}
}