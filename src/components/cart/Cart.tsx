import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';

import { useHistory } from "react-router-dom";

import {
	Container, Grid,
	Typography, Button,
} from '@material-ui/core';

import CartItem from "./CartItem";
import Summary from '../common/Summary';
import { CartContext } from "./../../contexts/CartContext";

import { useStyles } from './CartStyles';

//Cart Page
const Cart: React.FC = () => {
	let history = useHistory();
	const classes = useStyles();
	const { cart, dispatchCart } = useContext(CartContext);




	useEffect(() => {

	}, [cart])

	return (
		<main className={classes.content}>
			<Container maxWidth="xl" className={classes.container}>
				<Grid spacing={4} container className={classes.container}>
					<Grid item xs={12} md={8} lg={8} >
						<Typography variant='h6' align={"left"}>
							Cart
						</Typography>
						<Grid container direction="column" spacing={4} className={classes.container}>
							{
								cart.length > 0 ?
									cart.map(item => (
										<CartItem key={item.id} {...item} />
									))
									: <Typography variant='subtitle1' align={"left"}>
										No items has been added
									</Typography>
							}
						</Grid>
					</Grid>
					<Grid item xs={12} md={4} lg={4}>
						<Summary />

						<Button
							variant="contained"
							color="primary"
							onClick={() => history.push('/')}
						>
							Back to Shop
						</Button>
						<Button
							variant="contained"
							color="primary"
							onClick={() => dispatchCart({ type: 'DELETE_CART' })}
						>
							Clear Cart
						</Button>
						<Button
							component={Link}
							to='/checkout'
							variant="contained"
							color="secondary"
							disabled={cart.length === 0 ? true : false}
						>
							Checkout
						</Button>
						{/* <CheckoutModal modalStatus={modalStatus} modalClose={modalClose} /> */}
					</Grid>
				</Grid>
			</Container>
		</main >
	)
}
export default Cart;
