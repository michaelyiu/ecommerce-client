import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import {
	Container, Grid
} from '@material-ui/core';

import { useStyles } from './ItemDetailsStyles';

import { GET_PRODUCT } from "../gql/queries/products";

import CartCard from '../components/item/CartCard';
import ImageSelection from '../components/item/ImageSelection';
import FullPhoneDetails from '../components/item/FullPhoneDetails';

import { Product } from './../types/types';



const ItemDetails: React.FC<Product> = () => {
	const classes = useStyles();

	const { item_id } = useParams();

	const { data } = useQuery(GET_PRODUCT, {
		variables: { id: item_id }
	});

	return (
		<main className={classes.content}>
			<Container maxWidth="xl" className={classes.container}>
				<Grid spacing={4} container className={classes.container}>
					<Grid item xs={4} md={3} lg={2} >
						{data && data.product ? <CartCard  {...data.product} /> : null}
					</Grid>
					<Grid item xs={8} md={5} lg={5} >
						{data && data.product ? <ImageSelection  {...data.product} /> : null}
					</Grid>
					<Grid item xs={12} md={4} lg={5} >
						{data && data.product ? <FullPhoneDetails {...data.product} /> : null}
					</Grid>
				</Grid>
			</Container>
		</main>
	)
}

export default ItemDetails;