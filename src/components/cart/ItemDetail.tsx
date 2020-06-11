import React, { useRef, useContext } from "react";
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import {
	Container, Grid, Card,
	Typography,
	Button
} from '@material-ui/core';

import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";

import { UPDATE_CART } from "../../gql/mutations/cart";
import { GET_PRODUCT } from "../../gql/queries/products";

import { Product } from './../../types/types';
import * as UpdateCartType from '../../gql/mutations/__generated__/updateCart';

import { stripTypename } from "../../lib/helpers";

import { useStyles } from './ItemDetailStyles';



const ItemDetail: React.FC<Product> = (props) => {
	const classes = useStyles();

	const { isAuthenticated } = useContext(AuthContext);
	const { cart, addToCart } = useContext(CartContext);

	const { item_id } = useParams();
	let productImage = useRef<HTMLImageElement>(null);

	const [updateCart] = useMutation<UpdateCartType.updateCart>(UPDATE_CART);

	const { data } = useQuery(GET_PRODUCT, {
		variables: { id: item_id }
	});

	const switchImage = (img: string) => {
		// product
		if (productImage && productImage.current)
			productImage.current.src = img
	}
	return (
		<main className={classes.content}>
			<Container maxWidth="xl" className={classes.container}>
				<Grid spacing={4} container className={classes.container}>
					<Grid item xs={4} md={3} lg={3} className={classes.imgChooser}>
						{data ? data.product.images.map((img: string) => (
							<Card key={img} elevation={4} className={classes.productImgChoice} onClick={() => switchImage(img)}>
								<img src={img} alt='the phone itself' className={classes.choiceImg} />
							</Card>
						)
						) : null}

					</Grid>

					<Grid item xs={5} md={5} lg={5} className={classes.flex}>
						<Card className={classes.cell} elevation={4} >
							<img src={'https://res.cloudinary.com/themikecloud/image/upload/v1591332741/ecommerce/smsg_s10_black1.png'} alt='the phone itself' className={classes.productImg} ref={productImage} />
						</Card>
					</Grid>

					<Grid item xs={12} md={12} lg={4}>
						<Card elevation={4} className={classes.infoBlock}>
							<Typography>
								{data ? data.product.name : null}
							</Typography>
							<Typography>
								{data ? data.product.price : null}
							</Typography>
							<Typography>
								{data ? data.product.description : null}
							</Typography>
							{/* maybe add color option here for extra */}
						</Card>
						<Button onClick={() => {
							if (data)
								addToCart(data.product);
							if (isAuthenticated)
								updateCart({ variables: { cartInput: { orderedItems: stripTypename(cart) } } })
						}}>Add To Cart</Button>
					</Grid>

				</Grid>
			</Container>
		</main>
	)
}

export default ItemDetail;