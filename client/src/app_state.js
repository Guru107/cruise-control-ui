import { createContext } from 'react'

export const initialState = {
	cruiseControl: {
		ccstate:{},
		load:{},
		kafka_cluster_state:{}
	},
	updateState: () => {}
}

const CruiseControlState = createContext(initialState)

export default CruiseControlState