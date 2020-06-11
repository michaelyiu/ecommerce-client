import React, { useContext } from 'react';
import { Redirect } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';

import { SIGNIN_MUTATION } from "../gql/mutations/auth";
import { UPDATE_CART } from "../gql/mutations/cart";

import LoginForm from "../components/auth/LoginForm";
import Spinner from '../components/common/Spinner';

import { AuthContext } from '../contexts/AuthContext';
import { CartContext } from '../contexts/CartContext';

import * as LoginTypes from '../gql/mutations/__generated__/signIn';
import { stripTypename } from "./../lib/helpers";

export default function Login() {

	const { isAuthenticated, toggleAuth } = useContext(AuthContext);
	const { addManyToCart } = useContext(CartContext);

	const cartData = window.localStorage.getItem('cart')!;
	const cartItems = cartData !== null ? JSON.parse(cartData) : [];

	const [updateCart] = useMutation(UPDATE_CART);



	const [signIn, { loading, data, error }] = useMutation<LoginTypes.signIn, LoginTypes.signInVariables>(
		SIGNIN_MUTATION,
		{
			onCompleted(data) {
				// Store token if login is successful
				if (data && data.signIn) {
					toggleAuth();
					window.localStorage.setItem('token', data.signIn.token)
					window.localStorage.setItem('email', data.signIn.email)

					//once you logged in, updateCart for user with the one in localStorage

					//if local storage cart has items, we updateCart in db
					if (cartItems.length > 0) {
						console.log(data)
						updateCart({ variables: { cartInput: { orderedItems: stripTypename(cartItems) } } })
						addManyToCart(cartItems);
					}

					console.log(data)
					return <Redirect to='/' />
				}
			},
			onError(err) {
				//need this here to suppress typescript issue with apollo graphqlErrors
			}
		}
	);





	if (loading) return <Spinner />
	if (data) {
		window.localStorage.setItem('token', data.signIn.token)
		window.localStorage.setItem('email', data.signIn.email)
		// Redirect to home page
		return <Redirect to='/' />
	}
	if (isAuthenticated) {
		return <Redirect to='/' />
	}

	function showError() {
		if (error) {
			return (
				<div>
					{
						error.graphQLErrors.map(({ message }, i) =>
							(
								<div key={i}>
									<h4>{message ? message : null}</h4>
								</div>
							)
						)
					}
				</div>
			)
		}
	}

	return <LoginForm login={signIn} error={showError()} />
}