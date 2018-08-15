import React from 'react'
import CruiseControlStateComponent from './app_state'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import AppBar from './app_bar'
import customTheme from './Theme'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'
import CruiseControlState from './state_view'
import { Consumer } from './app_state'


const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

function App(props) {
  const { classes } = props
  
  return (
    <CruiseControlStateComponent>
      <MuiThemeProvider theme={customTheme}>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar />
          
          <Grid container style={{ paddingLeft: 5, paddingRight: 5 }}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              <Consumer>
              {
                ({ccstate,updateState}) => {
                 return <CruiseControlState ccstate={ccstate} updateState={updateState}/>
                }
              }
              </Consumer>
                
              </Paper>
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    </CruiseControlStateComponent>
  )
}

export default withStyles(styles)(App)
