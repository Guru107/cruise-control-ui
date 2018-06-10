import React, { Component } from 'react'
import CruiseControlStateComponent from './app_state'
import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {
  render() {
    return (
      <CruiseControlStateComponent>
        <CssBaseline/>
      </CruiseControlStateComponent>
    )
  }
}

export default App
