import React, { useContext } from "react";

import { useMutation } from '@apollo/react-hooks';

import {
	Card, CardMedia, CardContent,
	Button, ButtonGroup,
	Divider,
	Typography,
	Link,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { useStyles } from './PhoneCardStyles';

import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";

import { UPDATE_CART } from "../../gql/mutations/cart";

import * as UpdateCartType from '../../gql/mutations/__generated__/updateCart';
import { Product } from './../../types/types';

import { stripTypename } from "../../lib/helpers";




const PhoneCard: React.FC<Product> = (props) => {
	const classes = useStyles();

	const { isAuthenticated } = useContext(AuthContext);
	const { cart, dispatchCart } = useContext(CartContext);

	const [updateCart] = useMutation<UpdateCartType.updateCart>(UPDATE_CART);

	return (
		<Card className={classes.card} elevation={4}>
			<CardMedia
				className={classes.media}
				image={props.images[0]}
				title={props.name}
			/>
			<Divider />
			{/* card content here maybe set size to equal 100% width */}
			<CardContent>
				<Typography>{props.name}</Typography>
				<Typography>${props.price}</Typography>
				<Typography className={classes.pos}>{props.description}</Typography>

				<ButtonGroup
					variant="text"
					color="primary"
					aria-label="text primary button group"
					fullWidth={true}
				>
					<Button onClick={async () => {
						dispatchCart({ type: 'ADD_ONE_TO_CART', item: props })
						if (isAuthenticated)
							await updateCart({ variables: { cartInput: { orderedItems: stripTypename(cart) } } })

					}}><ShoppingCartIcon />
						Add
					</Button>

					<Button>
						<Link href={`/item/${props.id}`} color="inherit" style={{ textDecoration: 'none' }} >
							More Info
						</Link>
					</Button>
				</ButtonGroup>
			</CardContent>
		</Card>
	)
}

export default PhoneCard;