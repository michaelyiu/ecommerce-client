import React from 'react';
import { Redirect } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';

import { SIGNUP_MUTATION } from "../gql/mutations/auth";

import RegisterForm from "../components/auth/RegisterForm";
import Spinner from '../components/common/Spinner';

import * as RegisterTypes from '../gql/mutations/__generated__/signUp';

export default function Register() {
	const [signUp, { loading, data, error }] = useMutation<RegisterTypes.signUp, RegisterTypes.signUpVariables>(
		SIGNUP_MUTATION,
		{

			onError(err) {
				//need this here to suppress typescript issue with apollo graphqlErrors
			}
		}
	)

	if (loading) return <Spinner />
	//if we get data back from RegisterForm, we redirect to login
	if (data)
		return <Redirect to='/login' />

	function showError() {
		if (error) {
			return (
				<div>
					{
						error.graphQLErrors.map(({ message }, i) =>
							(
								<div>
									<h4 key={i}>{message ? message : null}</h4>
								</div>
							)
						)
					}
				</div>
			)
		}
	}

	return <RegisterForm register={signUp} error={showError()} />
}