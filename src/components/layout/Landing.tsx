// Library imports
import React, { useContext } from "react";

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


import SideBar from "./SideBar";
import MainContent from "./MainContent";
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 240,
	},
})
)


const Landing: React.FC = () => {
	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return (
		<main className={classes.content}>
			<Container maxWidth="lg" className={classes.container}>
				<Grid container spacing={3}>
					<Hidden smDown>
						<Grid item xs={'auto'} md={4} lg={4}>
							<Paper className={fixedHeightPaper}>
								<SideBar />
							</Paper>
						</Grid>

					</Hidden>
					<Grid item xs={12} md={8} lg={8}>
						<Paper className={fixedHeightPaper}>
							<MainContent />
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</main>
	);
};

export default Landing;