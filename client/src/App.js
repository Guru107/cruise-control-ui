import React from 'react'

import { MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import AppBar from './app_bar'
import customTheme from './Theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Grid } from '@material-ui/core';
import CCState from './state_view'

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
})

function App(props) {
  const { classes } = props

  return (

      <MuiThemeProvider theme={customTheme}>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar />
          <main className={classes.content}>
          <div className={classes.toolbar}></div>
            <Grid container>
              <CCState/>
            </Grid>
          </main>

          {/*<Grid container style={{ paddingLeft: 5, paddingRight: 5 }}>
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
            
            </Grid>*/}
        </div>
      </MuiThemeProvider>

  )
}

export default withStyles(styles)(App)
