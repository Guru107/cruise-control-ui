import React from 'react'
import CruiseControlStateComponent from './app_state'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import AppBar from './app_bar'
import customTheme from './Theme'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'


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
    <CruiseControlStateComponent>
      <MuiThemeProvider theme={customTheme}>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography noWrap color="primary">
              {'You think water moves fast? You should see ice.'}
            </Typography>
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
    </CruiseControlStateComponent>
  )
}

export default withStyles(styles)(App)
