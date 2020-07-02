import React from 'react';
import { Card, CardContent } from '@material-ui/core';

import { useStyles } from './CheckoutStyles';

const Payment = () => {
	const classes = useStyles();
	return (
		<Card elevation={4}>
			<CardContent
				title={'Payment'}
				className={classes.banner}
			>
				<div>3. Payment</div>
			</CardContent>
		</Card>
	)
}

export default Payment;
