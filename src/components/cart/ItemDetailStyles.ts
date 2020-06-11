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
	},
	flex: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red'
	},
	cell: {
		flex: '1 1 auto',
		padding: '10px',
		margin: 'auto',

		backgroundColor: 'green',
		border: '1px solid red',
		textAlign: 'center',

	},
	productImg: {
		width: '100%',
		maxWidth: '300px',
		height: '100%',
	},
	productImgChoice: {
		height: '150px',
		maxWidth: '150px',
		minWidth: '75px',
		margin: '10px',
		width: '50%',
		textAlign: 'center'

	},
	choiceImg: {
		width: '75px',
		height: '150px',
		objectFit: 'cover',
	},
	infoBlock: {
		padding: '0 50px'
	},

	imgChooser: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},

	card: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#FFFFFF',
		alignItems: 'center',
		height: 800,
	},
	cardContent: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	pos: {
		margin: '6px 0',
		height: '100px'
	},

})
)