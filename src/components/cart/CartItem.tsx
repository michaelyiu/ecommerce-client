import React, { useContext } from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import InputLabel from '@material-ui/core/InputLabel'; import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import { Product } from './../../types/types';

import { CartContext } from "./../../contexts/CartContext";

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexGrow: 1,
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
	},
	imgCover: {
		width: 150,
		height: 150
	},
	content: {
		flex: '1 0 auto',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%'
	},
	formControl: {
		minWidth: 120
	}
}))


//Cart Page
const Cart: React.FC<Product> = (props) => {
	const { cart, editQuantity, removeFromCart } = useContext(CartContext);

	const classes = useStyles();
	const total: string = Number(props.price * props.quantity).toFixed(2);


	return (
		<Card className={classes.root} elevation={0}>
			<CardMedia
				className={classes.imgCover}
				// image={require(`${props.image}`)}
				image={require('../../assets/samsung_s10_grey.jpg')}
				title="Live from space album cover"
			/>
			<div className={classes.details}>
				<Grid container direction="column" spacing={2}>
					<Grid item xs>
						{/* <CardContent className={classes.content}> */}
						<Typography variant="h6">
							{props.name}
						</Typography>
						<Typography variant="subtitle1" color="textSecondary">
							{props.description}
						</Typography>
						<FormControl
						// className={classes.formControl}
						>
							<InputLabel id="qty-select-label">Quantity</InputLabel>
							<Select
								// labelId="qty-select-label"
								value={props.quantity}
								id="qty-select"
								onChange={(e) => editQuantity(props.id, Number(e.target.value))}
							>
								<MenuItem value={1}>1</MenuItem>
								<MenuItem value={2}>2</MenuItem>
								<MenuItem value={3}>3</MenuItem>
								<MenuItem value={4}>4</MenuItem>
								<MenuItem value={5}>5</MenuItem>
								<MenuItem value={6}>6</MenuItem>
								<MenuItem value={7}>7</MenuItem>
								<MenuItem value={8}>8</MenuItem>
								<MenuItem value={9}>9</MenuItem>
								<MenuItem value={10}>10</MenuItem>
							</Select>
						</FormControl>
						{/* </CardContent> */}
					</Grid>
					<Grid item>
						<Grid item>
							<Typography color="textPrimary">{total}</Typography>
						</Grid>
						<Grid item>
							<Button onClick={() => removeFromCart(props.id)}>Remove</Button>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</Card >

	)
}
export default Cart;
