// Library imports
import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { BrandList } from '../../types/types';

export interface FilterFunction {
	filterChange: (value: React.ChangeEvent<{}>, newValue: string) => void
	value: string
}

const useStyles = makeStyles(theme => ({
	root: {
		// display: 'flex',
		flexDirection: 'column',
		'& > *': {
			margin: theme.spacing(1),
		},
		'&:last-child': { paddingBottom: '5px' }

	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
		fontSize: '0.5rem',
	},
	tab: {
		minHeight: '16px',
		// padding: '6px 0'
	}
}));

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
