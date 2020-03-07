import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { Typography } from "@material-ui/core";
import CartItem from "./CartItem";

const useStyles = makeStyles(theme => ({
	content: {
		flexGrow: 1,
		height: '100vh',
		// overflow: 'auto', causes double vertical scroll bars..
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
		margin: 0,
	},
}))
//Cart Page
const Cart: React.FC = () => {
	const classes = useStyles();
	return (
		<main className={classes.content}>
			<Container maxWidth="lg" className={classes.container}>
				<Grid spacing={4} container className={classes.container}>
					<Grid item xs={12} md={8} lg={8} >
						<Typography variant='h6' align={"left"}>
							CartITEM
						</Typography>
						<Grid container direction="column" spacing={4} className={classes.container}>

							<CartItem />
							<CartItem />
						</Grid>
					</Grid>
					<Grid item xs={12} md={4} lg={4}>
						<Typography>
							Total
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</main >
	)
}
export default Cart;
