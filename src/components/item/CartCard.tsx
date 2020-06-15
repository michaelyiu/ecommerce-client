import React, { useContext } from "react";
import { useMutation } from '@apollo/react-hooks';

import { useHistory } from "react-router-dom";

import { Card, CardContent, Typography, Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";

import { UPDATE_CART } from "../../gql/mutations/cart";

import { Product } from '../../types/types';
import * as UpdateCartType from '../../gql/mutations/__generated__/updateCart';

import { stripTypename } from "../../lib/helpers";

import { useStyles } from './CartCardStyles';


const CartCard: React.FC<Product> = (props) => {
	let history = useHistory();
	const classes = useStyles();

	const { isAuthenticated } = useContext(AuthContext);
	const { cart, dispatchCart, quantity } = useContext(CartContext);

	const [updateCart] = useMutation<UpdateCartType.updateCart>(UPDATE_CART);

	return (
		<React.Fragment>
			<Card elevation={4}>
				<CardContent
					title={'test'}
					className={classes.cartCardTitle}
				>
					<div className={classes.cartCardText}>
						<ShoppingCartIcon />
						{quantity === 1 ? `${quantity} item in cart` : `${quantity} items in cart`}
					</div>
				</CardContent>
				<CardContent>
					<Typography>
						{props.name}
					</Typography>
					<Typography>
						${props.price}
					</Typography>
				</CardContent>
				<CardContent>

					<Button
						variant="contained"
						color="primary"
						className={classes.cartCardButtons}
						onClick={() => {
							dispatchCart({ type: 'ADD_ONE_TO_CART', item: props })

							if (isAuthenticated)
								updateCart({ variables: { cartInput: { orderedItems: stripTypename(cart) } } })
						}}
					>
						Add to Cart
					</Button>
					<Button
						variant="contained"
						color="primary"
						className={classes.cartCardButtons}
						onClick={() => history.push('/')}
					>
						Back to store
					</Button>
				</CardContent>
			</Card>
		</React.Fragment>
	)
}

export default CartCard;