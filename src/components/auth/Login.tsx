import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";

import { useMutation } from '@apollo/react-hooks';
import { SIGNIN_MUTATION } from "../../gql/mutations/auth";

type FormData = {
	name: string;
	email: string;
	password: string;
};

//Login form component
const Login: React.FC = () => {
	const [user, setUserLogin] = useState({});

	const { register, handleSubmit, errors } = useForm<FormData>();
	const onSubmit = handleSubmit((data) => {
		setUserLogin(data);
		signIn();
	});

	const [signIn, { loading, data, error }] = useMutation(
		SIGNIN_MUTATION,
		{
			variables: user,
			onCompleted(data) {
				if (data && data.signIn)
					window.localStorage.setItem('token', data.signIn.token)
			}
		}
	)

	return (
		<form onSubmit={onSubmit}>
			<label>Email</label>
			<input name="email" ref={register} />
			<label>Password</label>
			<input name="password" ref={register} />
			<input type="submit" value="Submit" />
		</form>
	)
}

export default Login;