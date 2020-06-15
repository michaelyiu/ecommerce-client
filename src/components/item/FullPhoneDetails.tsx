import React from "react";

import { Product } from '../../types/types';

import {
	CardContent, Card,
	Typography
} from '@material-ui/core';

const FullPhoneDetails: React.FC<Product> = (props) => {
	return (
		<React.Fragment>
			<Card elevation={4}>
				<CardContent>
					<Typography variant='h6'>
						Specifications
					</Typography>
				</CardContent>
				<CardContent>
					<Typography variant='subtitle1'>
						{props.description}
					</Typography>
					<Typography variant='subtitle1'>
						display all stats here
					</Typography>

				</CardContent>
			</Card>
		</React.Fragment>

	)
}

export default FullPhoneDetails;