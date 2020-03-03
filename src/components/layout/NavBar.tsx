import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';

import { NavContext } from "../../contexts/NavContext";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const NavBar = () => {
	const classes = useStyles();
	const { active, setActive } = useContext(NavContext);

	return (
		<AppBar position="static" style={{ background: '#2E3B55' }}>
			<Toolbar>

				<Typography variant="h6" className={classes.title}>
					MY Phones
				</Typography>
				<Hidden smDown>
					<Button component={Link} to="/register" color="inherit">Register</Button>
					<Button component={Link} to="/login" color="inherit">Login</Button>
				</Hidden>
				<Hidden mdUp>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
						onClick={() => setActive(!active)}>
						<MenuIcon />
					</IconButton>
				</Hidden>
			</Toolbar>
		</AppBar>
	)
}

export default NavBar;