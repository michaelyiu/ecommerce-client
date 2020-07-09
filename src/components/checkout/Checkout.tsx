import React, { useState, useContext } from 'react';

import { Container, Grid } from '@material-ui/core';

import { useStyles } from './CheckoutStyles';
import Summary from '../common/Summary';
import Shipping from './Shipping';
import Billing from './Billing';
import Payment from './Payment';
import FormlessBanner from './FormlessBanner';

import { CartContext } from "./../../contexts/CartContext";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(`pk_test_51H0qAmDfkrwvxAj1EFlFdYLXJrueh45ryTk8M2AkfeuuZkHQNLbGX8Xj42KTNTih8pCOWOO51IQKBdmDRMEM0AVZ00yvKqQ1yj`)

const Checkout = () => {
	const [checkpoint, setCheckpoint] = useState('Shipping');
	const classes = useStyles();
	const { cart } = useContext(CartContext);

	let subtotal = 0;
	for (let i = 0; i < cart.length; i++) {
		subtotal = subtotal + (cart[i].price * cart[i].quantity);
	}

	const formattedSubtotal: string = Number(subtotal).toFixed(2);
	const tax: string = Number(+formattedSubtotal * .13).toFixed(2);
	const total: number = parseFloat(Number(+formattedSubtotal + +tax).toFixed(2));
	console.log(typeof total)
	const goNextStep = (prevStep: string) => {
		switch (prevStep) {
			case 'Shipping':
				setCheckpoint('Billing');
				break;
			case 'Billing':
				setCheckpoint('Payment');
				break;
			default:
				setCheckpoint('Shipping');
				break;
		}
	}
	const changeStep = (step: string) => {
		setCheckpoint(step)
	}

	return (
		<main className={classes.content}>
			<Container maxWidth="xl" className={classes.container}>
				<Grid spacing={4} container className={classes.container}>
					<Grid item xs={8} md={8} lg={8} className={classes.item}>
						{
							checkpoint === 'Shipping'
								? <Shipping nextStep={goNextStep} />
								: <FormlessBanner title={'Shipping'} changeStep={changeStep} currentStep={checkpoint} />
						}
						{
							checkpoint === 'Billing'
								? <Billing nextStep={goNextStep} />
								: <FormlessBanner title={'Billing'} changeStep={changeStep} currentStep={checkpoint} />
						}
						{
							checkpoint === 'Payment'
								? (
									<Elements stripe={stripePromise}>
										<Payment formattedSubtotal={formattedSubtotal} tax={tax} total={total} />
									</Elements>
								)
								: <FormlessBanner title={'Payment'} currentStep={checkpoint} />
						}
					</Grid>
					<Grid item xs={4} md={4} lg={4} className={classes.item}>
						<Summary formattedSubtotal={formattedSubtotal} tax={tax} total={total} />
					</Grid>
				</Grid>
			</Container>
		</main >
	)
}

export default Checkout;