import React, { createContext, useReducer } from "react";
import { navReducer } from '../reducers/NavReducer';

type SetNav = (value: any) => void;

interface Nav {
	active: boolean;
	dispatchNav: SetNav;
}

export const NavContext = createContext<Nav>({
	active: false,
	dispatchNav: (): void => { }
});

const NavContextProvider: React.FC = (props) => {
	const [active, dispatchNav] = useReducer(navReducer, false);
	return (
		<NavContext.Provider value={{ active, dispatchNav }}>
			{props.children}
		</NavContext.Provider>
	);
}

export default NavContextProvider;