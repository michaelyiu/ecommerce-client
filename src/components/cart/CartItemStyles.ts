import {
	makeStyles,
} from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexGrow: 1,
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
	},
	imgCover: {
		width: 150,
		height: 150
	},
	content: {
		flex: '1 0 auto',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%'
	},
	formControl: {
		minWidth: 120
	}
}));