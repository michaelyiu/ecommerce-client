import React from 'react';

import {
	Typography,
	Table, TableBody, TableCell, TableContainer, TableRow,
	Card, CardContent
} from '@material-ui/core';

import { useStyles } from './SummaryStyles';

interface BillProps {
	formattedSubtotal: string
	tax: string
	total: number
}


const Summary = (props: BillProps) => {

	const { formattedSubtotal, tax, total } = props;

	const classes = useStyles();



	return (
		<>
			<Card elevation={4}>
				<CardContent
					className={classes.banner}
				>
					<div>Summary</div>
				</CardContent>
				{/* <CardContent> */}
				{/* <div>Subtotal</div>
					<div>Taxes</div>
					<div>Total</div> */}
				<TableContainer>
					<Table className={classes.table} aria-label="spanning table">
						<TableBody>
							{/* <TableRow>
							<TableCell className={classes.banner}>
								<Typography variant='h6'>
									Summary
							</Typography>
							</TableCell>
						</TableRow> */}
							<TableRow>
								<TableCell>Subtotal</TableCell>
								<TableCell align="right">{formattedSubtotal}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell >Taxes</TableCell>
								<TableCell align="right">{tax}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell >Total</TableCell>
								<TableCell align="right">{total}</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
				{/* </CardContent> */}
			</Card>
		</>

	)
}

export default Summary;