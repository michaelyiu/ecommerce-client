import React, { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { SIGNIN_MUTATION } from "../gql/mutations/auth";

import LoginForm from "../components/auth/LoginForm";

import * as LoginTypes from '../gql/mutations/__generated__/signIn';

import { AuthContext } from '../contexts/AuthContext';

import { Redirect } from "react-router-dom";

export default function Login() {

	const { isAuthenticated, toggleAuth } = useContext(AuthContext);

	const [signIn, { loading, data, error }] = useMutation<LoginTypes.signIn, LoginTypes.signInVariables>(
		SIGNIN_MUTATION,
		{
			onCompleted(data) {
				// Store token if login is successful
				if (data && data.signIn) {
					toggleAuth();
					window.localStorage.setItem('token', data.signIn.token)
					window.localStorage.setItem('email', data.signIn.email)
					return <Redirect to='/' />
				}
			},
			onError(err) {
				//need this here to suppress typescript issue with apollo graphqlErrors
			}
		}
	);

	if (isAuthenticated) {
		return <Redirect to='/' />
	}

	function showError() {
		if (error) {
			return (
				<div>
					{
						error.graphQLErrors.map(({ message }, i) => (
							<div>
								<h4 key={i}>{message ? message : null}</h4>
							</div>

						))
					}
				</div>
			)
		}
	}

	return <LoginForm login={signIn} error={showError()} />
}