import React from 'react';

import { useMutation } from '@apollo/react-hooks';
import { SIGNUP_MUTATION } from "../gql/mutations/auth";
import RegisterForm from "../components/auth/RegisterForm";

import { Redirect } from "react-router-dom";

export default function Register() {
	const [signUp, { loading, data, error }] = useMutation(
		SIGNUP_MUTATION,
		{

			onError(err) {

			}
		}
	)

	if (data)
		return <Redirect to='/login' />

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

	return <RegisterForm register={signUp} error={showError()} />

}