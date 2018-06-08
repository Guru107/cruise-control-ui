import { createContext } from 'react'

const CruiseControlState = createContext({
	cruiseControl: {test:'hello,state!'},
	updateState: () => {}
})

export default CruiseControlState