import React, { useContext } from "react";

import { fade, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import { ProductContext } from "./../../contexts/ProductContext";


export interface SearchFunction {
	searchChange: (value: React.ChangeEvent<HTMLInputElement>) => void
}
const useStyles = makeStyles(theme =>
	({
		search: {
			position: 'relative',
			borderRadius: theme.shape.borderRadius,
			backgroundColor: fade(theme.palette.common.white, 0.15),
			'&:hover': {
				backgroundColor: fade(theme.palette.common.white, 0.25),
			},
			marginLeft: 0,
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				marginLeft: theme.spacing(1),
				width: 'auto',
			},
		},
		input: {
			backgroundColor: 'white',
			boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)',
			paddingInlineStart: '36px',
			paddingInlineEnd: '36px',
			position: 'relative',
			height: '44px',

		},
		searchIcon: {
			left: '8px',
			position: 'absolute',
			bottom: '0',
			top: '0',
			width: '24px',
			height: '100%',
			zIndex: 3,
			color: '#BEBEBE'
		},
		searchBar: {
			position: 'relative',
			'-webkit-mask-size': '20px',
			'--searchbox-height': '44px'
		},
	})
);



const Search: React.FC<SearchFunction> = (props) => {
	const { products, setSearch } = useContext(ProductContext);
	const classes = useStyles();

	// const onChange = (e: any) => {
	// 	let searchResults = [];
	// 	for (let i = 0; i < products.length; i++) {
	// 		if (products[i].name.toLowerCase().includes(e.target.value.toLowerCase()))
	// 			searchResults.push(products[i])
	// 	}

	// 	setSearch(searchResults);
	// }
	return (
		<div>
			<Typography variant='h6' align='center'>
				Search Phones
			</Typography>
			<div className={classes.searchBar}>

				<SearchIcon className={classes.searchIcon} />
				<InputBase
					placeholder="Search…"
					className={classes.input}
					inputProps={{ 'aria-label': 'search' }}
					onChange={props.searchChange}
				/>
			</div>
		</div>
	)
}

export default Search;