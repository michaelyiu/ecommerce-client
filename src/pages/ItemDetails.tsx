import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import {
	makeStyles,
	Container, Grid
} from '@material-ui/core';

import { GET_PRODUCT } from "../gql/queries/products";

import CartCard from '../components/item/CartCard';
import ImageSelection from '../components/item/ImageSelection';
import FullPhoneDetails from '../components/item/FullPhoneDetails';

import { Product } from './../types/types';

const useStyles = makeStyles(theme =>
	({
		content: {
			flexGrow: 1,
			height: '100vh',
			// overflow: 'auto', causes double vertical scroll bars..
		},
		container: {
			paddingTop: theme.spacing(4),
			paddingBottom: theme.spacing(4),
		},
		card: {
			display: 'flex',
			overflow: 'auto',
			flexDirection: 'column',
			backgroundColor: '#F8F8F8',
			justifyContent: 'center',
			alignItems: 'center'
		},
		fixedHeight: {
			height: 120,
		},
		item: {
			flex: 1
		},
	})
)

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