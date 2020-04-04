import React, { useContext } from 'react';

import { useQuery, useMutation } from '@apollo/react-hooks';

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';

import { GET_CART } from "../../gql/queries/cart";
import { NEW_CART } from "../../gql/mutations/cart";

import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";
import { NavContext } from "../../contexts/NavContext";

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
		textDecoration: 'none',
		color: 'white'
	}
}));

const NavBar = () => {
	const classes = useStyles();

	const { isAuthenticated, toggleAuth } = useContext(AuthContext);
	const { active, setActive } = useContext(NavContext);
	// const { cartQuantity, setQuantity, addItem } = useContext(CartContext);

	const onLogoutClick = () => {
		localStorage.clear();
		toggleAuth();
	}

	// NavBar should have the cartQuery and store cartContext
	const { data: cart } = useQuery(GET_CART, {
		onCompleted() {
			console.log(cart);
			if (!cart) {
				newCart()
			}
		}
	});

	const [newCart, { data: newCartData, loading, error }] = useMutation(NEW_CART, {
		// onCompleted() {
		// 	if (isAuthenticated){

		// 	}
		// }
		onError(err) {

		},
		refetchQueries: [{ query: GET_CART }],
		awaitRefetchQueries: true,
	})
	console.log(newCartData);

	//maybe have a onEffect that runs once here

	const authLinks = (
		<Hidden smDown>
			<Link to="/cart" className={classes.links}>
				<ShoppingCartIcon />
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
			</Link>
			<Button component={Link} to="/register" color="inherit">Register</Button>
			<Button component={Link} to="/login" color="inherit">Login</Button>
		</Hidden>
	);

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