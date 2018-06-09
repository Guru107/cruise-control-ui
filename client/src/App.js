import React, { Component } from 'react'
import CruiseControlState, { initialState } from './app_state'
import StateView from './state_view'
import LoadView from './load_view'

class App extends Component {
	constructor(_props) {
		super(_props)
		
		this.updateState = (newStateFragment,statepath) => {
			this.setState(prevState => {
				
				return {
					cruiseControl: {
						[statepath]:{
							...prevState.cruiseControl[statepath],
							...newStateFragment
						}
					}
				}
			})
		}
		this.state = {
			...initialState,
			updateState: this.updateState
		}

	}
	render() {
		return (
			<CruiseControlState.Provider value={this.state}>
				<div>
					<header>
						<h1>Kafka Cruise Control</h1>
					</header>
					<div>
					
						<CruiseControlState.Consumer>
							{
								(state) => <StateView ccstate={state.cruiseControl.ccstate} updateState={state.updateState}/>
								
							}
						</CruiseControlState.Consumer>
				
					
						<CruiseControlState.Consumer>
							{
								(state) => <LoadView load={state.cruiseControl.load} updateState={state.updateState}/>
							}
						</CruiseControlState.Consumer>
					</div>
				</div>
				</CruiseControlState.Provider>
			
		)
	}
}

export default App
