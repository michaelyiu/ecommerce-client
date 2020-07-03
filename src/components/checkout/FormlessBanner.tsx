import React from 'react';
import { Button, Card, CardContent, Typography } from '@material-ui/core';

import { useStyles } from './CheckoutStyles';

interface FormlessBannerProps {
	title: string
	changeStep?: (step: string) => void
	currentStep: string
}
const FormlessBanner = (props: FormlessBannerProps) => {
	//if props = a certain string word, we can return a tuple like 3. payment maybe
	const classes = useStyles();
	const { title, changeStep, currentStep } = props;

	return (
		<Card elevation={4} className={classes.checkoutForm}>
			<CardContent
				title={'Payment'}
				className={`${classes.banner} ${classes.root}`}
			>
				<Typography variant='subtitle1'>{title}</Typography>
				{
					((currentStep !== 'Shipping' && title === 'Billing' && changeStep)
						|| (currentStep !== 'Shipping' && title === 'Shipping' && changeStep)
					)
						?
						<Button
							variant="contained"
							color="primary"
							onClick={() => changeStep(title)}
						>
							Edit
						</Button>
						: null
				}
			</CardContent>
		</Card >
	)
}

export default FormlessBanner;
