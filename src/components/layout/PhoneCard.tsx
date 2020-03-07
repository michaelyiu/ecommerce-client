import React, { useContext } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme => ({
	media: {
		height: '80%',
		// paddingTop: '56.25%', // 16:9
		width: '80%'
	},
	card: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#FFFFFF',
		// justifyContent: 'center',
		alignItems: 'center',
		height: 420,
	},
	pos: {
		margin: '6px 0'
	},
})
)

const PhoneCard: React.FC = () => {
	const classes = useStyles();
	return (
		// <Grid item xs={12} sm={6} md={4} lg={3}>
		<Card className={classes.card} elevation={4}>
			<CardMedia
				className={classes.media}
				image={require('../../assets/samsung_s10.jpg')}
				title="test"
			/>
			<Divider />
			{/* card content here maybe set size to equal 100% width */}
			<CardContent>
				<Typography>IPhone</Typography>
				<Typography>$1000.00</Typography>
				<Typography className={classes.pos}>Doggo ipsum pupper super chub very jealous pupper noodle horse snoot, super chub very taste wow.</Typography>

				<ButtonGroup
					variant="text"
					color="primary"
					aria-label="text primary button group"
					fullWidth={true}
				>
					<Button><ShoppingCartIcon />Add</Button>
					<Button>More Info</Button>
				</ButtonGroup>

			</CardContent>
		</Card>
		// </Grid>
	)
}

export default PhoneCard;