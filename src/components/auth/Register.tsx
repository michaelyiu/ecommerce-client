import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";

import { useMutation } from '@apollo/react-hooks';
import { SIGNUP_MUTATION } from "../../gql/mutations/auth";


type FormData = {
	name: string;
	email: string;
	password: string;
	password2: string;
};

//Register form component
const Register: React.FC = () => {
	const [newUser, setNewUserData] = useState({});

	const { register, handleSubmit, errors } = useForm<FormData>();
	const onSubmit = handleSubmit((data) => {
		setNewUserData(data);
		signUp();
	});

	const [signUp, { loading, data, error }] = useMutation(
		SIGNUP_MUTATION,
		{
			variables: newUser
		}
	)


	return (
		<form onSubmit={onSubmit}>
			<label>Name</label>
			<input name="name" ref={register} />
			<label>Email</label>
			<input name="email" ref={register} />
			<label>Password</label>
			<input name="password" ref={register} />
			<label>Confirm Password</label>
			<input name="password2" ref={register} />
			<input type="submit" value="Submit" />
		</form>
	);
}

export default Register;