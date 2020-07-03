import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import { useStyles } from './CheckoutStyles';

const Payment = () => {
	const classes = useStyles();
	return (
		<Card elevation={4}>
			<CardContent
				title={'Payment'}
				className={classes.banner}
			>
				<Typography variant='subtitle1'>3. Payment</Typography>
			</CardContent>
		</Card>
	)
}

export default Payment;
