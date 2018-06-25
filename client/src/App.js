import React, { Component } from 'react'
import CruiseControlStateComponent from './app_state'
import { MuiThemeProvider } from  '@material-ui/core/styles'
import AppBar from './app_bar'
import theme from './Theme'
import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {
  render() {
    return (
      <CruiseControlStateComponent>
        <MuiThemeProvider theme={theme}>
          <CssBaseline/>
          <AppBar/>
        </MuiThemeProvider>
      </CruiseControlStateComponent>
    )
  }
}

export default App
