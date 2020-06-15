import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
	({
		test: {
			backgroundColor: 'rgb(46, 59, 85)',
			color: 'white'
		},
		cartCardText: {
			display: 'flex'
		},
		cartCardButtons: {
			width: '100%',
			margin: theme.spacing(0, 0, 1),
		}
	})
);