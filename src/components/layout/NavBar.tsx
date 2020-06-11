import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
	makeStyles,
	AppBar, Toolbar,
	Typography,
	Button, IconButton,
	Hidden
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";
import { NavContext } from "../../contexts/NavContext";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	links: {
		position: 'relative',
		textDecoration: 'none',
		color: 'white'
	},
	cartJewel: {
		display: 'block',
		textAlign: 'center',
		width: '16px',
		height: '16px',
		position: 'absolute',
		top: '-6px',
		right: '-6px',
		borderRadius: '50%',
		paddingTop: '1px',
		lineHeight: '12px',
		fontSize: '12px',
		color: '#fff',
		background: '#fa5400',
	}
}));

const NavBar = () => {
	const classes = useStyles();

	const { isAuthenticated, toggleAuth } = useContext(AuthContext);
	const { clearCart, sumQtyCart, quantity } = useContext(CartContext);
	const { active, setActive } = useContext(NavContext);

	const onLogoutClick = () => {
		localStorage.clear();
		clearCart();
		toggleAuth();
		sumQtyCart();
	}

	const authLinks = (
		<Hidden smDown>
			<Link to="/cart" className={classes.links}>
				<ShoppingCartIcon />
				<span className={classes.cartJewel}>{quantity}</span>
			</Link>
			<Button component={Link} to="/" color="inherit"
				onClick={onLogoutClick}
			> Logout</Button>
		</Hidden>
	);

	const guestLinks = (
		<Hidden smDown>
			<Link to="/cart" className={classes.links}>
				<ShoppingCartIcon />
				<span className={classes.cartJewel}>{quantity}</span>
			</Link>
			<Button component={Link} to="/register" color="inherit">Register</Button>
			<Button component={Link} to="/login" color="inherit">Login</Button>
		</Hidden>
	);

	useEffect(() => {
		sumQtyCart();
	}, [quantity, sumQtyCart])

	return (
		<AppBar position="static" style={{ background: '#2E3B55' }}>
			<Toolbar>
				<Typography variant="h6" className={classes.title}>
					<Link to="/" className={classes.links}>
						MY Phones
					</Link>
				</Typography>
				{isAuthenticated ? authLinks : guestLinks}
				{/* <Hidden smDown>
					<Link to="/cart" className={classes.links}>
						<ShoppingCartIcon />
					</Link>
					<Button component={Link} to="/register" color="inherit">Register</Button>
					<Button component={Link} to="/login" color="inherit">Login</Button>
				</Hidden> */}
				<Hidden mdUp>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
						onClick={() => setActive(!active)}>
						<MenuIcon />
					</IconButton>
				</Hidden>
			</Toolbar>
		</AppBar>
	)
}

export default NavBar;