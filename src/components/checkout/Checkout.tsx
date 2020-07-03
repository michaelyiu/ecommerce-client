import React, { useState } from 'react';

import { Container, Grid } from '@material-ui/core';

import { useStyles } from './CheckoutStyles';
import Summary from '../common/Summary';
import Shipping from './Shipping';
import Billing from './Billing';
import Payment from './Payment';
import FormlessBanner from './FormlessBanner';

const Checkout = () => {
	const [checkpoint, setCheckpoint] = useState('Shipping');
	const classes = useStyles();

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
								? <Payment />
								: <FormlessBanner title={'Payment'} currentStep={checkpoint} />
						}

					</Grid>
					<Grid item xs={4} md={4} lg={4} className={classes.item}>
						<Summary />
					</Grid>
				</Grid>
			</Container>
		</main >
	)
}

export default Checkout;