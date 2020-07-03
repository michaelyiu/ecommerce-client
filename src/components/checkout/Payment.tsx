import React from 'react';
import { Container, Card, CardContent, Typography, Grid, InputLabel, OutlinedInput, Button } from '@material-ui/core';

import { useStyles } from './CheckoutStyles';
import { useForm } from "react-hook-form";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

console.log(require('dotenv').config())
// require('dotenv').config({ path: __dirname + '/.env' });
const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY!)


const Payment = () => {
	const classes = useStyles();
	const { register, handleSubmit } = useForm();

	const onSubmit = handleSubmit(async (data) => {
	});

	return (
		<Card elevation={4}>
			<CardContent
				title={'Payment'}
				className={classes.banner}
			>
				<Typography variant='subtitle1'>3. Payment</Typography>
			</CardContent>
			<Container>
				<CardContent>
					<form noValidate onSubmit={onSubmit}>
						<Grid spacing={4} container justify={'flex-end'}>
							<Grid item xs={'auto'} md={6} lg={6} >
								<InputLabel
									required
									htmlFor="name"
								>Name on Card
								</InputLabel>
							</Grid>
							<Grid item xs={'auto'} md={6} lg={6} >
								<OutlinedInput
									fullWidth
									required
									name="name"
									inputRef={register}
								// value={shippingInfo ? shippingInfo.firstname : ''}
								/>
							</Grid>

							<Grid item xs={'auto'} md={6} lg={6} >
								<InputLabel
									required
									htmlFor="card-number"
								>Card Number
								</InputLabel>
							</Grid>
							<Grid item xs={'auto'} md={6} lg={6} >
								<OutlinedInput
									fullWidth
									required
									name="card-number"
									inputRef={register}
								// value={shippingInfo ? shippingInfo.firstname : ''}
								/>
							</Grid>

							<Grid item xs={'auto'} md={6} lg={6} >
								<InputLabel
									required
									htmlFor="exp-date"
								>Expiration Date
								</InputLabel>
							</Grid>
							<Grid item xs={'auto'} md={6} lg={6} >
								<OutlinedInput
									fullWidth
									required
									name="exp-date"
									inputRef={register}
								// value={shippingInfo ? shippingInfo.firstname : ''}
								/>
							</Grid>

							<Grid item xs={'auto'} md={6} lg={6} >
								<InputLabel
									required
									htmlFor="security-code"
								>Security Code
								</InputLabel>
							</Grid>
							<Grid item xs={'auto'} md={6} lg={6} >
								<OutlinedInput
									fullWidth
									required
									name="security-code"
									inputRef={register}
								// value={shippingInfo ? shippingInfo.firstname : ''}
								/>
							</Grid>
							<Grid container item xs={'auto'} md={6} lg={6} justify="flex-end">
								<Button
									type="submit"
									variant="contained"
									color="primary"
								>
									Continue to Billing
								</Button>
							</Grid>
						</Grid>
					</form>
				</CardContent>
			</Container>

			{/* <Elements stripe={stripePromise}>children</Elements> */}
		</Card>
	)
}

export default Payment;
