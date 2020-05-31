import React, { useContext } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";

import CartItem from "./CartItem";

import { CartContext } from "./../../contexts/CartContext";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
const useStyles = makeStyles(theme => ({
	content: {
		flexGrow: 1,
		height: '100vh',
		// overflow: 'auto', causes double vertical scroll bars..
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
		margin: 0,
	},
	table: {
		minWidth: 50,
		width: 300
	},
}))

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
								cart.map(item => (
									<CartItem key={item.id} {...item} />
								))
							}
						</Grid>
					</Grid>
					<Grid item xs={12} md={4} lg={4}>
						<TableContainer>
							<Table className={classes.table} aria-label="spanning table">

								<TableBody>
									<TableRow>
										<Typography variant='h6'>
											Summary
										</Typography>

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
						{/* <Typography variant='h6'>
							Summary
						</Typography>
						<Grid container direction="column" spacing={4} className={classes.container}>

							<Typography variant="subtitle1" color="textSecondary">
								Subtotal ${formattedSubtotal}
							</Typography>
							<Typography variant="subtitle1" color="textSecondary">
								Taxes ${tax}
							</Typography>
							<Divider />

							<Typography variant="subtitle1" color="textSecondary">
								Total ${total}
							</Typography>
						</Grid> */}
					</Grid>
				</Grid>
			</Container>
		</main >
	)
}
export default Cart;
