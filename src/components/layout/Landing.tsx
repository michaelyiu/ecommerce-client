// Library imports
import React, { useContext } from "react";

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Search from "./Search";
import Filter from "./Filter";
import MainContent from "./MainContent";
import Hidden from '@material-ui/core/Hidden';
import PhoneCard from "./PhoneCard";

const useStyles = makeStyles(theme => ({
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
	const fixedHeightCard = clsx(classes.card, classes.fixedHeight);

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
											<Search />
										</CardContent>
									</Card>
								</Grid>
								<Grid className={classes.item} item>
									<Card className={`${classes.fixedHeightFilter} ${classes.card}`} elevation={4}>
										<CardContent className={classes.cardContent}>
											<Filter />
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						</Hidden>
					</Grid>
					<Grid item xs={12} md={9} lg={9}>
						<Grid container spacing={4}>
							<Grid item xs={12} sm={6} md={4} lg={3}>

								<PhoneCard />
							</Grid>
							<Grid item xs={12} sm={6} md={4} lg={3}>
								<PhoneCard />
							</Grid>
							<Grid item xs={12} sm={6} md={4} lg={3}>
								<PhoneCard />
							</Grid>
							<Grid item xs={12} sm={6} md={4} lg={3}>
								<PhoneCard />
							</Grid>
							<Grid item xs={12}>
								<Card className={fixedHeightCard} elevation={4}>
									<MainContent />
								</Card>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</main >
	);
};

export default Landing;
