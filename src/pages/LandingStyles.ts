import {
	makeStyles,
} from '@material-ui/core';

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