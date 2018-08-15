import React,{ createContext, Component } from 'react'

export const { Provider, Consumer } = createContext()

class CruiseControlStateComponent extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.updateState.bind(this)

    this.state = {
      ccstate: {},
      load: null,
      kafka_cluster_state: null,
      updateState: this.updateState
    }
  }

  updateState(newStateFragment, statepath) {
    this.setState(prevState => {
      const newState = {
        
          ...prevState,
          [statepath]: {
            ...prevState[statepath],
            ...newStateFragment
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
