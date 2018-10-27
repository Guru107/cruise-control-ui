import React from 'react'

import { MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import AppBar from './app_bar'
import customTheme from './Theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Grid } from '@material-ui/core';
import CCState from './state_view'
import ClusterLoad from './load_view'
import KafkaClusterState from './kafka_cluster_state_view'
import { BrowserRouter, Route } from 'react-router-dom'

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
    overflow: "auto",
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
})

function App(props) {
  const { classes } = props

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={customTheme}>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar />
          <main className={classes.content}>
          <div className={classes.toolbar}></div>
            <Grid container>
              <Route exact path="/" component={CCState} />
              <Route path="/load" component={ClusterLoad} />
              <Route path="/partition-load" component={() => <div>{'Work in Progress'}</div>} />
              <Route path="/cluster-state" component={KafkaClusterState} />
              <Route path="/proposals" component={() => <div>{'Work in Progress'}</div>} />
            </Grid>
          </main>
        </div>
      </MuiThemeProvider>
      </BrowserRouter>

  )
}

export default withStyles(styles)(App)
