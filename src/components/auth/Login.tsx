import React, { useState, useContext } from "react";
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
import { useForm } from "react-hook-form";

import { useMutation } from '@apollo/react-hooks';
import { SIGNIN_MUTATION } from "../../gql/mutations/auth";

type FormData = {
	// name: string;
	email: string;
	password: string;
};

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="/">
				Your Website
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
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

//Login form component
const Login: React.FC = () => {
	const classes = useStyles();
	const [user, setUserLogin] = useState({});

	const { register, handleSubmit, errors } = useForm<FormData>();
	const onSubmit = handleSubmit((data) => {
		setUserLogin(data);
		console.log(user);
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
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>

	)
}

export default Login;