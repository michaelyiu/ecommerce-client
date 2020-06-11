import React, { useContext } from "react";

import { useMutation } from '@apollo/react-hooks';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";

import { UPDATE_CART } from "../../gql/mutations/cart";

import * as UpdateCartType from '../../gql/mutations/__generated__/updateCart';
import { stripTypename } from "../../lib/helpers";
import { Product } from './../../types/types';


const useStyles = makeStyles(theme => ({
	media: {
		height: '80%',
		// paddingTop: '56.25%', // 16:9
		width: '80%'
	},
	card: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#FFFFFF',
		// justifyContent: 'center',
		alignItems: 'center',
		height: 420,
	},
	pos: {
		margin: '6px 0',
		height: '100px'
	},

})
)


const PhoneCard: React.FC<Product> = (props) => {
	const classes = useStyles();

	const { isAuthenticated } = useContext(AuthContext);
	const { cart, addToCart } = useContext(CartContext);

	const [updateCart] = useMutation<UpdateCartType.updateCart>(UPDATE_CART);


	return (
		<Card className={classes.card} elevation={4}>
			<CardMedia
				className={classes.media}
				image={'https://res.cloudinary.com/themikecloud/image/upload/v1591332368/ecommerce/samsung_s10_black_back.png'}
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
						addToCart(props);
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