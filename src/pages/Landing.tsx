// Library imports
import React, { useContext, useEffect, useState } from "react";

import { useQuery, useLazyQuery } from '@apollo/react-hooks';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Search from "../components/layout/Search";
import Filter from "../components/layout/Filter";
import MainContent from "../components/layout/MainContent";
import Hidden from '@material-ui/core/Hidden';
import PhoneCard from "../components/layout/PhoneCard";

import { GET_CART } from "../gql/queries/cart";
import { ALL_PRODUCTS } from "../gql/queries/products";
import { AuthContext } from "../contexts/AuthContext";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

import * as ProductType from '../gql/queries/__generated__/allProducts';
// import * as CartType from '../gql/queries/__generated__/cart';
import { stripTypename } from "../lib/helpers";


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
			padding: theme.spacing(2),
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
		fixedHeightFilter: {
			height: 400,
		},
		item: {
			flex: 1
		},
		cardContent: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		},
		cardContainer: {
			display: 'flex',
			flexWrap: 'wrap'
		}
	})
)


const Landing: React.FC = () => {
	const classes = useStyles();
	const { isAuthenticated } = useContext(AuthContext);
	const { addManyToCart, sumQtyCart, quantity } = useContext(CartContext);
	const { products, setProducts, searchResult, filterResult, setFilter, setSearch } = useContext(ProductContext);
	const [filterValue, setFilterValue] = useState('');
	const [searchValue, setSearchValue] = useState('');

	const fixedHeightCard = clsx(classes.card, classes.fixedHeight);

	const cartData = window.localStorage.getItem('cart')!;
	const cartItems = cartData !== null ? JSON.parse(cartData) : [];

	//allProducts query needs to be here 
	const { data: allProductsData } = useQuery<ProductType.allProducts>(ALL_PRODUCTS, {
		onCompleted() {
			if (allProductsData) {
				let products: any = allProductsData.allProducts //using any here since I cant match types here..
				products = stripTypename(products);
				setProducts(products);
				sumQtyCart();
			}
		}
	})

	const [getCart, { data: cartDataServer }] = useLazyQuery(GET_CART, {
		onCompleted() {
			const cartFromServer = cartDataServer.cart.orderedItems;
			for (let i = 0; i < cartFromServer.length; i++) {
				let newObj = cartFromServer[i].product;
				newObj.quantity = cartFromServer[i].quantity;
				cartItems.push(newObj)
			}

			addManyToCart(cartItems);
		}
	});

	//deals with child Filter component
	const filterChange = (value: React.ChangeEvent<{}>, newValue: string) => {
		let results = [];
		//if same filter is clicked in succession, the filter is removed
		//else proceed with normal filter
		if (newValue === filterValue) {
			setFilter([]);
			setFilterValue('')


		} else {

			for (let i = 0; i < products.length; i++) {
				if (products[i].brand.toLowerCase().includes(newValue.toLowerCase()))
					results.push(products[i])
			}
			setFilter(results);
			setFilterValue(newValue);
		}
	}

	//deals with child Search component
	const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let searchResults = [];
		for (let i = 0; i < products.length; i++) {
			if (products[i].name.toLowerCase().includes(e.target.value.toLowerCase()))
				searchResults.push(products[i])
		}
		console.log(e.target.value)
		setSearch(searchResults);
		setSearchValue(e.target.value);
	}

	const filterSearch = () => {
		let arrayToRender = [];
		if ((searchValue.length === 0 && filterValue.length === 0)) {
			arrayToRender = [...products];
		}
		else if ((searchResult.length === 0 && filterResult.length === 0) || (searchValue.length > 0 && searchResult.length === 0 && filterValue.length > 0)) {
			arrayToRender = [];
			return (<div>NO RESULTS FOUND</div>)
		}
		else if (searchResult.length === 0 && filterResult.length > 0) {
			arrayToRender = [...filterResult];
		}
		else if (searchResult.length > 0 && filterResult.length === 0) {
			arrayToRender = [...searchResult];
		}
		else {
			console.log(products);
			arrayToRender = searchResult.filter((searchProduct) =>
				filterResult.some(filteredProduct => filteredProduct.id === searchProduct.id)
			)
		}
		return arrayToRender.map(
			(product: any) => (
				<Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
					<PhoneCard  {...product} />
				</Grid>
			)
		)
	}

	useEffect(() => {
		if ((isAuthenticated && cartItems === null) || (isAuthenticated && cartItems.length === 0)) {
			getCart()
		}
	}, [getCart, isAuthenticated, quantity])


	return (
		<main className={classes.content}>
			<Container maxWidth="xl" className={classes.container}>
				<Grid spacing={4} container className={classes.container}>
					<Grid item xs={'auto'} md={3} lg={3} >
						<Hidden smDown>
							<Grid container direction="column" spacing={4}>
								<Grid className={classes.item} item>
									<Card className={fixedHeightCard} elevation={4}>
										<CardContent className={classes.cardContent}>
											<Search searchChange={searchChange} />
										</CardContent>
									</Card>
								</Grid>
								<Grid className={classes.item} item>
									<Card className={`${classes.fixedHeightFilter} ${classes.card}`} elevation={4}>
										<CardContent className={classes.cardContent}>
											<Filter filterChange={filterChange} value={filterValue} />
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						</Hidden>
					</Grid>
					<Grid item xs={12} md={9} lg={9}>
						<Grid container spacing={4}>
							{
								filterSearch()
							}
							<Grid item xs={12}>
								<Card className={fixedHeightCard} elevation={4}>
									<MainContent />
								</Card>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</main>
	);
};

export default Landing;
