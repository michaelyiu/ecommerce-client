import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
	productImg: {
		width: '100%',
		height: '100%',
		objectFit: 'cover'
	},
	imageTab: {
		// height: '150px',
		// maxWidth: '150px',
		// minWidth: '75px',
		margin: '10px',
		width: '32%',
		textAlign: 'center',
		'&:hover': {
			border: '1px solid rgb(46, 59, 85);'
		}
	},
	smallProductImg: {
		width: '75px',
		height: '150px',
		objectFit: 'cover',
	},
	tabContainer: {
		display: 'flex'
	}
})
)