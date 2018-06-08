import React, { Component } from 'react'
import CruiseControlState from './app_state'
import StateView from './state_view'

class App extends Component {
	constructor(props) {
		super(props)
		
		this.updateState = newStateFragment => {
			this.setState(prevState => {
				console.log(newStateFragment)
				return {
					cruiseControl: {
						...prevState.cruiseControl,
						...newStateFragment
					}
				}
			})
		}
		this.state = {
			cruiseControl:{test: 'hello, state!'},
			updateState: this.updateState
		}

	}
	render() {
		return (
			<CruiseControlState.Provider value={ this.state }>
				<div>
					<header>
						<h1>Kafka Cruise Control</h1>
					</header>
					<div>
						<CruiseControlState.Consumer>
							{
								(state) => <StateView {...state}/>
								
							}
						</CruiseControlState.Consumer>
					</div>
				</div>
			</CruiseControlState.Provider>
		)
	}
}

export default App
