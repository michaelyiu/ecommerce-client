import React, { useContext, useEffect } from "react";

import {
	Container, Grid,
	Typography,
	Table, TableBody, TableCell, TableContainer, TableRow
} from '@material-ui/core';

import CartItem from "./CartItem";

import { CartContext } from "./../../contexts/CartContext";

import { useStyles } from './CartStyles';

//Cart Page
const Cart: React.FC = () => {
	const classes = useStyles();
	const { cart } = useContext(CartContext);

	let subtotal = 0;
	for (let i = 0; i < cart.length; i++) {
		subtotal = subtotal + (cart[i].price * cart[i].quantity);
	}

	const formattedSubtotal: string = Number(subtotal).toFixed(2);
	const tax: string = Number(+formattedSubtotal * .13).toFixed(2);
	const total: string = Number(+formattedSubtotal + +tax).toFixed(2);

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
						<TableContainer>
							<Table className={classes.table} aria-label="spanning table">

								<TableBody>
									<TableRow>
										<TableCell>

											<Typography variant='h6'>
												Summary
											</Typography>
										</TableCell>

									</TableRow>

									<TableRow>
										<TableCell>Subtotal</TableCell>
										<TableCell align="right">{formattedSubtotal}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell >Taxes</TableCell>
										<TableCell align="right">{tax}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell >Total</TableCell>
										<TableCell align="right">{total}</TableCell>
									</TableRow>
								</TableBody>

							</Table>
						</TableContainer>
					</Grid>
				</Grid>
			</Container>
		</main >
	)
}
export default Cart;
