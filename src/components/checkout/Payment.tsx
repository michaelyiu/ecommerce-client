import React from 'react';
import { Container, Card, CardContent, Typography } from '@material-ui/core';


import { useStyles } from './CheckoutStyles';
import CreditCardSection from './CreditCartSection';


const Payment = ({ children, formattedSubtotal, tax, total }: { children?: any, formattedSubtotal: string, tax: string, total: number }) => {
	const classes = useStyles();



	return (
		<Card elevation={4} className={classes.checkoutForm}>
			<CardContent
				title={'Payment'}
				className={classes.banner}
			>
				<Typography variant='subtitle1'>3. Payment</Typography>
			</CardContent>
			<Container>
				<CardContent>
					<CreditCardSection formattedSubtotal={formattedSubtotal} tax={tax} total={total} />
				</CardContent>
			</Container>
		</Card>
	)
}

export default Payment;
