import React, { useState, useContext } from 'react';
import { Button, Checkbox, FormControlLabel, Container, Grid, Card, CardContent, InputLabel, OutlinedInput } from '@material-ui/core';
import { useStyles } from './CheckoutStyles';

import { useForm } from "react-hook-form";

import { ShippingContext } from "../../contexts/ShippingContext";
import { BillingContext } from "../../contexts/BillingContext";

import { ShippingInfo } from '../../types/types';

interface CheckoutProps {
	nextStep: (prevStep: string) => void;
}




const Billing = (props: CheckoutProps) => {
	const classes = useStyles();

	const { nextStep } = props;
	const { shippingInfo } = useContext(ShippingContext);
	const { billingInfo, dispatchBilling } = useContext(BillingContext);
	const { register, handleSubmit } = useForm<ShippingInfo>();

	const [checked, setChecked] = useState(true);
	//if checked then billingInfo === shippingInfo
	//if NOT checked, then slates clean


	const onSubmit = handleSubmit(async (data) => {
		dispatchBilling({ type: 'SET_BILLING', billing: data });
		nextStep('Billing');
	})

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	const shippingDetails = (
		<React.Fragment>
			<Grid item xs={'auto'} md={12} lg={12}>
				{shippingInfo.firstname + ' ' + shippingInfo.lastname}
			</Grid>
			<Grid item xs={'auto'} md={12} lg={12}>
				{shippingInfo.address}
			</Grid>
			<Grid item xs={'auto'} md={12} lg={12}>
				{shippingInfo.city + ' ' + shippingInfo.province + ' ' + shippingInfo.postal}
			</Grid>
			<Grid item xs={'auto'} md={12} lg={12}>
				{shippingInfo.country}
			</Grid>
		</React.Fragment>
	);

	const billingDetails = (
		<React.Fragment>
			<Grid item xs={'auto'} md={6} lg={6}>
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
				/>
			</Grid>
		</React.Fragment>
	)

	return (
		<Card elevation={4} className={classes.checkoutForm}>
			<CardContent
				title={'billing'}
				className={classes.banner}
			>
				<div>2. Billing</div>
			</CardContent>
			<Container>
				<CardContent>
					<FormControlLabel
						control={<Checkbox checked={checked} onChange={handleChange} name="useSameAddress" />}
						label="My billing address is the same as my shipping address"
					/>
					<form noValidate onSubmit={onSubmit}>
						<Grid spacing={4} container>
							{
								checked
									? shippingDetails
									: billingDetails
							}
							<Button
								type="submit"
								variant="contained"
								color="primary"
							// onClick={() => nextStep("Billing")}
							>
								Continue to Payment
						</Button>
						</Grid>
					</form>
				</CardContent>
			</Container>
		</Card >
	)
}

export default Billing;
