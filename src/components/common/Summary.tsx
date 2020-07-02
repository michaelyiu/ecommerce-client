import React, { useContext } from 'react';

import {
	Typography,
	Table, TableBody, TableCell, TableContainer, TableRow,
	Card, CardContent
} from '@material-ui/core';

import { CartContext } from "./../../contexts/CartContext";

import { useStyles } from './SummaryStyles';

const Summary = () => {
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
		<>
			<Card elevation={4}>
				<CardContent
					className={classes.banner}
				>
					<div>Summary</div>
				</CardContent>
				{/* <CardContent> */}
				{/* <div>Subtotal</div>
					<div>Taxes</div>
					<div>Total</div> */}
				<TableContainer>
					<Table className={classes.table} aria-label="spanning table">
						<TableBody>
							{/* <TableRow>
							<TableCell className={classes.banner}>
								<Typography variant='h6'>
									Summary
							</Typography>
							</TableCell>
						</TableRow> */}
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
				{/* </CardContent> */}
			</Card>
		</>

	)
}

export default Summary;