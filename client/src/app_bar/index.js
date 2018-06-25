import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const styles = theme =>({
	button: {
		margin: theme.spacing.unit,
	}
});

function CruiseControlAppBar(props) {
	const { classes } = props
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="title" color="inherit">
						Kafka Cruise Control Dashboard
					</Typography>
				</Toolbar>
			</AppBar>
			<div>
				<Button variant="contained" color="primary" className={classes.button}>State</Button>
				<Button variant="contained" color="primary" className={classes.button}>Load</Button>
				<Button variant="contained" color="primary" className={classes.button}>Kafka cluster state</Button>
				<Button variant="contained" color="primary" className={classes.button}>Partition Load</Button>
				<Button variant="contained" color="primary" className={classes.button}>Proposals</Button>
			</div>
		</div>
	)
}

export default withStyles(styles)(CruiseControlAppBar)

