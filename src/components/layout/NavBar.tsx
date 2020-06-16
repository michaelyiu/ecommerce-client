import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
	AppBar, Toolbar,
	Typography,
	Button, IconButton,
	Hidden
} from '@material-ui/core';
import { useStyles } from './NavBarStyles';

import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";
import { NavContext } from "../../contexts/NavContext";



const NavBar = () => {
	const classes = useStyles();

	const { isAuthenticated, dispatchAuth } = useContext(AuthContext);

	const { cart, quantity, dispatchCart, dispatchQuantity } = useContext(CartContext);
	const { dispatchNav } = useContext(NavContext);

	const onLogoutClick = () => {
		localStorage.clear();
		dispatchCart({ type: 'DELETE_CART' })
		dispatchAuth({ type: "LOGOUT" })
	}
	const cartHTML = (
		<Link to="/cart" className={classes.links}>
			<ShoppingCartIcon />
			<span className={classes.cartJewel}>{quantity}</span>
		</Link>
	);

	const authLinks = (
		<Hidden smDown>
			{cartHTML}
			<Button component={Link} to="/" color="inherit"
				onClick={onLogoutClick}
			> Logout</Button>
		</Hidden>
	);

	const guestLinks = (
		<Hidden smDown>
			{cartHTML}

			<Button component={Link} to="/register" color="inherit">Register</Button>
			<Button component={Link} to="/login" color="inherit">Login</Button>
		</Hidden>
	);

	useEffect(() => {
		dispatchQuantity({ type: 'SUM_UP_CART', cart })
	}, [dispatchQuantity, cart])

	return (
		<AppBar position="static" style={{ background: '#2E3B55' }}>
			<Toolbar>
				<Typography variant="h6" className={classes.title}>
					<Link to="/" className={classes.links}>
						MY Phones
					</Link>
				</Typography>
				{isAuthenticated ? authLinks : guestLinks}
				<Hidden mdUp>
					{cartHTML}
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
						onClick={() => dispatchNav({ type: 'TOGGLE_NAV' })}>
						<MenuIcon />
					</IconButton>
				</Hidden>
			</Toolbar>
		</AppBar>
	)
}

export default NavBar;