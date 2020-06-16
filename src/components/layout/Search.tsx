import React from "react";

import {
	Typography,
	InputBase
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './SearchStyles';

export interface SearchFunction {
	searchChange: (value: React.ChangeEvent<HTMLInputElement>) => void
}



const Search: React.FC<SearchFunction> = (props) => {
	const classes = useStyles();
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