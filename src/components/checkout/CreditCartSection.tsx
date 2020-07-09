import React, { useState } from 'react';
import { Button, OutlinedInput } from '@material-ui/core';

import './CreditCardSectionStyles.css';

import { useMutation } from '@apollo/react-hooks';

import { useStyles } from './CheckoutStyles';
import { useForm } from "react-hook-form";

import { CHECKOUT_MUTATION } from "../../gql/mutations/checkout";

import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CARD_ELEMENT_OPTIONS = {
	style: {
		base: {
			color: "#32325d",
			fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
			fontSmoothing: "antialiased",
			fontSize: "16px",
			"::placeholder": {
				color: "#aab7c4",
			},
		},
		invalid: {
			color: "#fa755a",
			iconColor: "#fa755a",
		},
	},
};

interface BillProps {
	formattedSubtotal: string;
	tax: string
	total: number
}

const CreditCartSection = (props: BillProps) => {

	const classes = useStyles();
	const { register, handleSubmit } = useForm();
	const [name, setName] = useState('');
	const [checkout] = useMutation(CHECKOUT_MUTATION);
	const { tax, formattedSubtotal, total } = props;

	const stripe = useStripe();
	const elements = useElements();


	if (!stripe || !elements) {
		//stripe.js has not yet loaded
		return (<div>Loading</div>);
	}

	const onSubmit = handleSubmit(async (data) => {
		//post to /api/payment_intents

		const checkoutMutation = await checkout({ variables: { total_bill: total } })
		console.log(checkoutMutation.data)
		const { client_secret } = checkoutMutation.data.createOrder

		const result = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: elements.getElement(CardElement)!,
				billing_details: {
					name
				}
			}
		})
		console.log(result);
	});


	return (
		<form noValidate onSubmit={onSubmit}>
			<div className="form-row">
				<label htmlFor="name" className="checkout-form-label">
					Name
				</label>
				<OutlinedInput
					id="name"
					name="name"
					placeholder="Full name"
					required
					fullWidth
					value={name}
					onChange={(e: any) => setName(e.target.value)}
				/>
			</div>
			<div className="form-row">
				<label className="checkout-form-label">
					Credit Card
				</label>
				<CardElement options={CARD_ELEMENT_OPTIONS} />
			</div>
			<div className="form-row">
				<Button
					disabled={!stripe}
					type="submit"
					variant="contained"
					color="primary"
				>
					Confirm order
				</Button>
			</div>
		</form>

	)
}


export default CreditCartSection;