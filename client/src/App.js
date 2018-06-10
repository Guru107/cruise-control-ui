import React, { Component } from 'react'
import CruiseControlState, { initialState } from './app_state'
import StateView from './state_view'
import LoadView from './load_view'
import KafkaClusterStateView from './kafka_cluster_state_view'

class App extends Component {
  constructor(_props) {
    super(_props)

    this.updateState = (newStateFragment, statepath) => {
      this.setState(prevState => {
        const newState = {
          cruiseControl: {
            ...prevState.cruiseControl,
            [statepath]: {
              ...prevState.cruiseControl[statepath],
              ...newStateFragment
            }
          }
        }
        return newState
      })
    }
    this.state = {
      ...initialState,
      updateState: this.updateState
    }
  }
  render() {
    const { ccstate, load } = this.state.cruiseControl
    return (
      <div>
        <header>
          <h1>Kafka Cruise Control</h1>
        </header>
        <div>
          <CruiseControlState.Provider
            value={{ ccstate, updateState: this.state.updateState }}>
            <CruiseControlState.Consumer>
              {state => (
                <StateView
                  ccstate={state.ccstate}
                  updateState={state.updateState}
                />
              )}
            </CruiseControlState.Consumer>
          </CruiseControlState.Provider>
          <CruiseControlState.Provider
            value={{ load, updateState: this.state.updateState }}>
            <CruiseControlState.Consumer>
              {state => (
                <LoadView load={state.load} updateState={state.updateState} />
              )}
            </CruiseControlState.Consumer>
          </CruiseControlState.Provider>
        </div>
      </div>
    )
  }
}

export default App
