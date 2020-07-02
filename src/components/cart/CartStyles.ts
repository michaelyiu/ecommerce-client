import {
	makeStyles,
} from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
	content: {
		flexGrow: 1,
		height: '100vh',
		// overflow: 'auto', causes double vertical scroll bars..
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
		margin: 0,
	},
	table: {
		minWidth: 50,
		width: 300
	},
}));