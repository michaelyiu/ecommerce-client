import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
	({
		root: {
			'&:last-child': {
				paddingBottom: '16px'
			}
		},
		content: {
			flexGrow: 1,
			height: '100vh',
			// overflow: 'auto', causes double vertical scroll bars..
		},
		container: {
			paddingTop: theme.spacing(4),
			paddingBottom: theme.spacing(4),
		},
		banner: {
			display: 'flex',
			backgroundColor: 'rgb(46, 59, 85)',
			color: 'white',
			justifyContent: 'space-between',
		},
		item: {
			flex: 1
		},
		checkoutForm: {
			backgroundColor: '#eeeeee',
			marginBottom: '30px'
		},
		halfWidth: {
			width: '100%'
		},
	})
);