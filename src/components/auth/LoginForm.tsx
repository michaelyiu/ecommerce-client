import React from "react";
import {
	Container, Grid,
	Typography,
	Avatar,
	Button,
	CssBaseline,
	TextField, Link, Box
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { useForm } from "react-hook-form";

import * as LoginTypes from './../../gql/mutations/__generated__/signIn';

import Copyright from "./../layout/Copyright";

import { useStyles } from './LoginFormStyles';

type FormData = {
	email: string;
	password: string;
};

interface LoginFormProps {
	login: (a: { variables: LoginTypes.signInVariables }) => void;
	error?: JSX.Element
}

//Login form component
const LoginForm: React.FC<LoginFormProps> = (props) => {
	const classes = useStyles();

	const { register, handleSubmit } = useForm<FormData>();
	const onSubmit = handleSubmit(async (data) => {
		await props.login({ variables: data })
	});

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
        </Typography>
				<form className={classes.form} noValidate onSubmit={onSubmit}>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						inputRef={register}
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						inputRef={register}
						autoComplete="current-password"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign In
          </Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link href="/register" variant="body2">
								Don't have an account? Register
							</Link>
						</Grid>
					</Grid>
				</form>
				{props.error}
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>

	)
}

export default LoginForm;