import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
	root: {
		// display: 'flex',
		flexDirection: 'column',
		'& > *': {
			margin: theme.spacing(1),
		},
		'&:last-child': { paddingBottom: '5px' }

	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
		fontSize: '0.5rem',
	},
	tab: {
		minHeight: '16px',
	}
}));
