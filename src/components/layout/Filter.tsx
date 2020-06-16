// Library imports
import React from "react";

import {
	Typography,
	Tabs, Tab
} from '@material-ui/core';
import { useStyles } from './FilterStyles';

import { BrandList } from '../../types/types';

export interface FilterFunction {
	filterChange: (value: React.ChangeEvent<{}>, newValue: string) => void
	value: string
}


const Filter: React.FC<FilterFunction> = (props) => {
	const classes = useStyles();

	const renderTabs = () => {
		return BrandList.map((brand: string) =>
			<Tab
				key={brand}
				label={brand}
				className={classes.tab}
				value={brand}
			/>
		)
	}
	return (
		<div className={classes.root}>
			<Typography variant='h6' align='center'>
				Filter by brand
			</Typography>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={props.value || false}
				onChange={props.filterChange}
				aria-label="Vertical tabs example"
				className={classes.tabs}
			>
				{renderTabs()}
			</Tabs>
		</div>
	);
};

export default Filter;
