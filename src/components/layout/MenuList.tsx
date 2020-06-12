import React, { useContext } from "react";

import {
	makeStyles,
	Drawer,
	List, ListItem, ListItemText
} from '@material-ui/core';

import { AuthContext } from "../../contexts/AuthContext";
import { NavContext } from "../../contexts/NavContext";

const useStyles = makeStyles(theme => ({

	list: {
		width: 250,
	},
})
)

const MenuList: React.FC = () => {
	const classes = useStyles();

	const { active, dispatchNav } = useContext(NavContext);
	const { isAuthenticated } = useContext(AuthContext);

	const authLinks = ['Search', 'About MY Phones', 'Cart', 'Logout'];
	const guestLinks = ['Register', 'Login', 'Search', 'About MY Phones', 'Cart'];

	return (
		<Drawer anchor="right" open={active} onClose={() => dispatchNav({ type: 'TOGGLE_NAV' })}>
			<div
				className={classes.list}
				role="presentation"
				onClick={() => dispatchNav({ type: 'TOGGLE_NAV' })}
				onKeyDown={() => dispatchNav({ type: 'TOGGLE_NAV' })}
			>
				<List>
					{isAuthenticated ? authLinks.map((text, index) => (
						<ListItem button key={text}>
							<ListItemText primary={text} />
						</ListItem>
					)) : guestLinks.map((text, index) => (
						<ListItem button key={text}>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</div>
		</Drawer >

	)
}

export default MenuList;