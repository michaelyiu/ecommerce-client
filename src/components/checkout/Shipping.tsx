import React, { useContext } from 'react';
import { Button, Container, Grid, Card, CardContent, InputLabel, OutlinedInput, Typography } from '@material-ui/core';
import { useStyles } from './CheckoutStyles';

import { useForm } from "react-hook-form";

import { ShippingContext } from "../../contexts/ShippingContext";

import { ShippingInfo } from '../../types/types';

interface CheckoutProps {
	nextStep: (prevStep: string) => void;
}

const Shipping = (props: CheckoutProps) => {
	const classes = useStyles();

	const { nextStep } = props;
	const { shippingInfo, dispatchShipping } = useContext(ShippingContext);
	const { register, handleSubmit } = useForm<ShippingInfo>();

	const onSubmit = handleSubmit(async (data) => {
		//onsubmit setState
		dispatchShipping({ type: 'SET_SHIPPING', shipping: data })
		nextStep('Shipping');
	});


	return (
		<Card elevation={4} className={classes.checkoutForm}>
			<CardContent
				title={'shipping'}
				className={classes.banner}
			>
				<Typography variant='subtitle1'>1. Shipping</Typography>
			</CardContent>
			<Container>
				<CardContent>
					<form noValidate onSubmit={onSubmit}>
						<Grid spacing={4} container justify={'flex-end'}>
							<Grid item xs={'auto'} md={6} lg={6} >
								<InputLabel
									required
									htmlFor="firstname"
								>First Name
								</InputLabel>
								<OutlinedInput
									fullWidth
									required
									name="firstname"
									inputRef={register}
									value={shippingInfo ? shippingInfo.firstname : ''}
								/>
							</Grid>
							<Grid item xs={'auto'} md={6} lg={6}>
								<InputLabel
									required
									htmlFor="lastname"
								>Last Name
								</InputLabel>
								<OutlinedInput
									fullWidth
									required
									name="lastname"
									inputRef={register}
									value={shippingInfo ? shippingInfo.lastname : ''}
								/>
							</Grid>
							<Grid item xs={'auto'} md={12} lg={12}>
								<InputLabel
									required
									htmlFor="address"
								>Address
								</InputLabel>
								<OutlinedInput
									fullWidth
									required
									name="address"
									inputRef={register}
									value={shippingInfo ? shippingInfo.address : ''}
								/>
							</Grid>
							<Grid item xs={'auto'} md={6} lg={6}>
								<InputLabel
									required
									htmlFor="city"
								>City
								</InputLabel>
								<OutlinedInput
									fullWidth
									required
									name="city"
									inputRef={register}
									value={shippingInfo ? shippingInfo.city : ''}
								/>
							</Grid>
							<Grid item xs={'auto'} md={6} lg={6}>
								<InputLabel
									required
									htmlFor="province"
								>Province
								</InputLabel>
								<OutlinedInput
									fullWidth
									required
									name="province"
									inputRef={register}
									value={shippingInfo ? shippingInfo.province : ''}
								/>
							</Grid>
							<Grid item xs={'auto'} md={6} lg={6}>
								<InputLabel
									required
									htmlFor="postal"
								>Postal Code
								</InputLabel>
								<OutlinedInput
									fullWidth
									required
									name="postal"
									inputRef={register}
									value={shippingInfo ? shippingInfo.postal : ''}
								/>
							</Grid>
							<Grid item xs={'auto'} md={6} lg={6}>
								<InputLabel
									required
									htmlFor="country"
								>Country
								</InputLabel>
								<OutlinedInput
									fullWidth
									required
									name="country"
									inputRef={register}
									value={shippingInfo ? shippingInfo.country : ''}
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
		</Card>
	)
}

export default Shipping;
