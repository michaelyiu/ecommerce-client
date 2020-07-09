import React from 'react';
import {
	Container, Grid,
	Typography,
	Avatar,
	Button,
	CssBaseline,
	TextField, Link, Box
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { useStyles } from './RegisterFormStyles';

import { useForm } from "react-hook-form";

import * as RegisterTypes from './../../gql/mutations/__generated__/signUp';

import Copyright from "./../layout/Copyright";

type FormData = {
	name: string;
	email: string;
	password: string;
	password2: string;
};

interface RegisterFormProps {
	register: (a: { variables: RegisterTypes.signUpVariables }) => void;
	error?: JSX.Element
}



// Register form component
const RegisterForm: React.FC<RegisterFormProps> = (props) => {

	const classes = useStyles();
	const { register, handleSubmit, /*errors*/ } = useForm<FormData>();

	const onSubmit = handleSubmit((data) => {
		props.register({ variables: data })
	});

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Register
        </Typography>
				<form className={classes.form} noValidate onSubmit={onSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								autoComplete="name"
								name="name"
								variant="outlined"
								required
								fullWidth
								id="name"
								label="Full Name"
								inputRef={register}
								autoFocus
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								inputRef={register}
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								inputRef={register}
								autoComplete="current-password"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password2"
								label="Confirm Password"
								type="password"
								id="password2"
								inputRef={register}
								autoComplete="current-password"
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Register
          </Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link href="/login" variant="body2">
								Already have an account? Sign in
              </Link>
						</Grid>
					</Grid>
				</form>
				{props.error}
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
}
export default RegisterForm;