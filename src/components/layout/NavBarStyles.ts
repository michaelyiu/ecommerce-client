
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: theme.spacing(0),
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	links: {
		position: 'relative',
		textDecoration: 'none',
		color: 'white',
	},
	cartJewel: {
		display: 'block',
		textAlign: 'center',
		width: '16px',
		height: '16px',
		position: 'absolute',
		top: '-6px',
		right: '-6px',
		borderRadius: '50%',
		paddingTop: '1px',
		lineHeight: '12px',
		fontSize: '12px',
		color: '#fff',
		background: '#fa5400',
	}
}));