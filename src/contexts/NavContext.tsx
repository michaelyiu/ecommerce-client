import React, { createContext, useState } from "react";

type SetValue = (value: any) => void;

interface Nav {
	active: boolean;
	setActive: SetValue;
}


export const NavContext = createContext<Nav>({ active: false, setActive: (): void => { } });

const NavContextProvider: React.FC = (props) => {
	const [active, setActive] = useState(false);
	return (
		<NavContext.Provider value={{ active, setActive }}>
			{props.children}
		</NavContext.Provider>
	);
}

export default NavContextProvider;