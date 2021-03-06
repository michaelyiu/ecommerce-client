// Library imports
import React, { useContext, useEffect, useState } from "react";
import { useQuery, useLazyQuery } from '@apollo/react-hooks';

import {
	Container, Grid, Card,
	Hidden
} from '@material-ui/core';

import PhoneCard from "../components/layout/PhoneCard";
import Filter from "../components/layout/Filter";
import Search from "../components/layout/Search";

import { GET_CART } from "../gql/queries/cart";
import { ALL_PRODUCTS } from "../gql/queries/products";

import { AuthContext } from "../contexts/AuthContext";
import { CartContext } from "../contexts/CartContext";
import { SearchContext } from "../contexts/SearchBarContext";
import { FilterContext } from "../contexts/FilterContext";
import { ProductContext } from "../contexts/ProductContext";

import * as ProductType from '../gql/queries/__generated__/allProducts';
import { stripTypename } from "../lib/helpers";
import clsx from 'clsx';

import { useStyles } from './LandingStyles';

import { Product } from './../types/types';
import CartCard from "../components/item/CartCard";



const Landing: React.FC = () => {
	const classes = useStyles();

	/* context variables */
	const { isAuthenticated } = useContext(AuthContext);
	// const { addManyToCart, sumQtyCart, quantity } = useContext(CartContext);
	const { cart, quantity, dispatchCart, dispatchQuantity } = useContext(CartContext);
	const { products, dispatchProduct } = useContext(ProductContext);
	const { searchResult, dispatchSearch } = useContext(SearchContext);
	const { filterResult, dispatchFilter } = useContext(FilterContext);
	/* context variables */

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
				dispatchProduct({ type: 'SET_PRODUCTS', products });
				dispatchQuantity({ type: 'SUM_UP_CART', cart })
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
			dispatchCart({ type: 'ADD_MANY_TO_CART', items: cartItems })
		}
	});

	//deals with child Filter component
	const filterChange = (value: React.ChangeEvent<{}>, newValue: string) => {
		let results: Product[] = [];
		//if same filter is clicked in succession, the filter is removed
		//else proceed with normal filter
		if (newValue === filterValue) {
			dispatchFilter({ type: 'SET_FILTER', products: results });
			setFilterValue('')
		} else {
			for (let i = 0; i < products.length; i++) {
				if (products[i].brand.toLowerCase().includes(newValue.toLowerCase()))
					results.push(products[i])
			}

			dispatchFilter({ type: 'SET_FILTER', products: results });
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
		dispatchSearch({ type: 'SET_SEARCH', products: searchResults });
		setSearchValue(e.target.value);
	}


	// method to render filters and searches
	const filterSearch = () => {
		let arrayToRender: any = [];
		//if the search bar is empty and a filter hasn't been selected, all products are rendered
		if ((searchValue.length === 0 && filterValue.length === 0)) {
			arrayToRender = [...products];
		}
		//else if the result arrays come up empty or if a filter is chosen and a search doesnt come up with something.. then no results will be shown
		//ex. search for Iphone, and the filter 'Samsung' is selected
		else if ((searchResult.length === 0 && filterResult.length === 0) || (searchValue.length > 0 && searchResult.length === 0 && filterValue.length > 0)) {
			arrayToRender = [];
			return (<div>NO RESULTS FOUND</div>)
		}
		// handles selected filter render
		else if (searchResult.length === 0 && filterResult.length > 0) {
			arrayToRender = [...filterResult];
		}
		//handles search bar render
		else if (searchResult.length > 0 && filterResult.length === 0) {
			arrayToRender = [...searchResult];
		}
		//when both search and filter has items in common
		else {
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
									<CartCard />
								</Grid>
								<Grid className={classes.item} item>
									<Card className={fixedHeightCard} elevation={4}>
										<Search searchChange={searchChange} />
									</Card>
								</Grid>
								<Grid className={classes.item} item>
									<Card className={`${classes.fixedHeightFilter} ${classes.card}`} elevation={4}>
										<Filter filterChange={filterChange} value={filterValue} />
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
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</main>
	);
};

export default Landing;
