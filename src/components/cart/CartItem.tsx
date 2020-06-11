import React, { useContext } from "react";

import {
	Grid, Card, CardMedia,
	Typography,
	FormControl, InputLabel, MenuItem, Select, Button
} from '@material-ui/core';

import { CartContext } from "./../../contexts/CartContext";
import { Product } from './../../types/types';

import { useStyles } from './CartItemStyles';

//Cart Page
const Cart: React.FC<Product> = (props) => {
	const { editQuantity, removeFromCart } = useContext(CartContext);

	const classes = useStyles();
	const total: string = Number(props.price * props.quantity).toFixed(2);


	return (
		<Card className={classes.root} elevation={0}>
			<CardMedia
				className={classes.imgCover}
				// image={require(`${props.image}`)}
				image={'https://res.cloudinary.com/themikecloud/image/upload/v1591332368/ecommerce/samsung_s10_black_back.png'}
				title="Live from space album cover"
			/>
			<div className={classes.details}>
				<Grid container direction="column" spacing={2}>
					<Grid item xs>
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
