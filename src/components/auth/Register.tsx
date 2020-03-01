import React, { useState, useContext } from 'react';
import { useForm } from "react-hook-form";

import { useMutation } from '@apollo/react-hooks';
import { SIGNUP_MUTATION } from "../../gql/mutations/auth";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

type FormData = {
	name: string;
	email: string;
	password: string;
	password2: string;
};

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="/">
				MY Phones
      </Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

// Register form component
const Register: React.FC = () => {
	const classes = useStyles();
	const [newUser, setNewUserData] = useState({});
	const { register, handleSubmit, errors } = useForm<FormData>();

	const onSubmit = handleSubmit((data) => {
		console.log(data)
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
								type="password2"
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
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
}
export default Register;