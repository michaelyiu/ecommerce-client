import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
	({
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
			backgroundColor: 'rgb(46, 59, 85)',
			color: 'white'
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
		}
	})
);