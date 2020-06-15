import { Product } from '../types/types';

type Action = {
	type: string,
	cart: Product[]
	item: Product,
	items: Product[],

	id: string
	quantity: number
}

type State = Product[];

export const cartReducer = (state: State, action: Action) => {

	switch (action.type) {
		case 'SET_CART':
			return [...action.cart];
		case 'ADD_ONE_TO_CART': {
			let cartCopy: Product[] = state;
			const itemToUpdate = cartCopy.find((oldItem: Product) => action.item.id === oldItem.id)
			const itemIndex = cartCopy.findIndex((oldItem: Product) => action.item.id === oldItem.id)

			if (!itemToUpdate) {
				let updatedItem = Object.assign({}, action.item, { quantity: 1 })
				// const newCart = [...state, updatedItem]
				return [...state, updatedItem];
			}
			else {
				itemToUpdate.quantity++;
				cartCopy.splice(itemIndex, 1, itemToUpdate);
				return state.splice(0, state.length, ...cartCopy)
			}

		}


		case 'ADD_MANY_TO_CART':
			return action.items;
		case 'REMOVE_FROM_CART':
			const cartAfterRemoval = state.splice(state.findIndex((item: Product) => item.id === action.id), 1)
			return state.splice(0, state.length, ...cartAfterRemoval);
		case 'DELETE_CART':
			return [];
		case 'EDIT_QUANTITY': {
			let cartCopy: Product[] = state;
			const itemToUpdate = cartCopy.find((oldItem: Product) => action.item.id === oldItem.id);
			const itemIndex: number = cartCopy.findIndex((oldItem: Product) => action.item.id === oldItem.id);
			if (!itemToUpdate) {
				throw new Error("Something went wrong!")
			}
			else {
				itemToUpdate.quantity = action.quantity;
				cartCopy[itemIndex] = itemToUpdate;
				return state.splice(0, state.length, ...cartCopy);
			}
		}
		default:
			return state;
	}

}

export const quantityReducer = (state: number, action: Action) => {
	switch (action.type) {
		case 'SET_QUANTITY':
			return state;
		case 'SUM_UP_CART':
			let sum: number = 0;
			for (let i = 0; i < action.cart.length; i++) {
				sum = sum + +action.cart[i].quantity
			}
			return sum;

		default:
			return state;
	}
}