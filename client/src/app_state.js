import React,{ createContext, Component } from 'react'

export const { Provider, Consumer } = createContext()

class CruiseControlStateComponent extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.updateState.bind(this)

    this.state = {
      state: null,
      load: null,
      kafka_cluster_state: null,
      updateState: this.updateState
    }
  }

  updateState(newStateFragment, statepath) {
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

  render() {
    return (
      <Provider value={this.state}>
        { this.props.children }
      </Provider>
    )
  }
}

export default CruiseControlStateComponent
