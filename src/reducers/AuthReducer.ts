type Action = {
	type: string;
}

export const authReducer = (state: boolean, action: Action) => {
	switch (action.type) {
		case 'LOGIN':
			return true
		case 'LOGOUT':
			return false
		default:
			return state;
	}
}