import React, { useContext } from "react";

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavContext } from "../../contexts/NavContext";
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles(theme => ({

	list: {
		width: 250,
	},
})
)

const MenuList: React.FC = () => {
	const classes = useStyles();
	const { active, setActive } = useContext(NavContext);

	return (
		<Drawer anchor="right" open={active} onClose={() => setActive(false)}>
			<div
				className={classes.list}
				role="presentation"
				onClick={() => setActive(false)}
				onKeyDown={() => setActive(false)}
			>
				<List>
					{['Register', 'Login', 'Search', 'About MY Phones', 'Cart'].map((text, index) => (
						<ListItem button key={text}>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</div>
		</Drawer >

	)
}

export default MenuList;