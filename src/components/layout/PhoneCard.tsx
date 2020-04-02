import React, { useContext } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { CartContext } from "../../contexts/CartContext";

interface IProduct {
	id?: String
	name: String
	price: Number
	category: String
	image: String
	description: String
}
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
// const test = () => {
// 	console.log('test');
// }

const PhoneCard: React.FC<IProduct> = (props) => {
	const classes = useStyles();

	// const { cartQuantity, setQuantity } = useContext(CartContext);

	return (
		// <Grid item xs={12} sm={6} md={4} lg={3}>
		<Card className={classes.card} elevation={4}>
			<CardMedia
				className={classes.media}
				image={require('../../assets/samsung_s10.jpg')}
				title="test"
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
					<Button onClick={() => {
						//PRE everything
						//if its a guest, when user visits the site, they should be assigned a cart right away
						//where we can then use the cart_id assigned and returned to add and update the cart items
						//PRE everything

						//add to client's CartContext state first.. have an object
						/* 1)
						{
								id: 123456
								orderedItems {
									quantity
									product {
										name
									}
								}
								user {
									name
								}
						 }*/

						//OR
						/* 2)
						 productID
						 quantity
						 */

						// on add click, we can run the queries to add to cart..
						// for guests

						// when we already have stuff in cart, we can transfer guest cart items to
						// logged in user cart and then
						// delete guest cart

					}}><ShoppingCartIcon />Add</Button>
					<Button>More Info</Button>
				</ButtonGroup>

			</CardContent>
		</Card>
		// </Grid>
	)
}

export default PhoneCard;