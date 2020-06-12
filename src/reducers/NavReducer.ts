type Action = {
	type: string;
}

export const navReducer = (state: boolean, action: Action) => {
	switch (action.type) {
		case 'TOGGLE_NAV':
			return !state
		default:
			return state;
	}
}