import { makeStyles, fade } from '@material-ui/core';


export const useStyles = makeStyles(theme =>
	({
		search: {
			position: 'relative',
			borderRadius: theme.shape.borderRadius,
			backgroundColor: fade(theme.palette.common.white, 0.15),
			'&:hover': {
				backgroundColor: fade(theme.palette.common.white, 0.25),
			},
			marginLeft: 0,
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				marginLeft: theme.spacing(1),
				width: 'auto',
			},
		},
		input: {
			backgroundColor: 'white',
			boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)',
			paddingInlineStart: '36px',
			paddingInlineEnd: '36px',
			position: 'relative',
			height: '44px',
			paddingLeft: '20px',
			paddingRight: '20px',

		},
		searchIcon: {
			left: '8px',
			position: 'absolute',
			bottom: '0',
			top: '0',
			width: '24px',
			height: '100%',
			zIndex: 3,
			color: '#BEBEBE'
		},
		searchBar: {
			position: 'relative',
			width: '90%',
			margin: '0 auto',
			'-webkit-mask-size': '20px',
			'--searchbox-height': '44px'
		},
	})
);