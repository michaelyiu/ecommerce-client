// Library imports
import React from "react";

import { fade, makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

const Filter: React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Typography variant='h6' align='center'>
				Filter by brand
			</Typography>
			<ButtonGroup
				orientation="vertical"
				color="primary"
				aria-label="vertical outlined primary button group"
			>
				<Button>Apple</Button>
				<Button>HTC</Button>
				<Button>Huawei</Button>
				<Button>Lenovo</Button>
				<Button>Oneplus</Button>
				<Button>Samsung</Button>
				<Button>Sony</Button>
				<Button>Xiaomi</Button>
			</ButtonGroup>
		</div>
	);
};

export default Filter;
