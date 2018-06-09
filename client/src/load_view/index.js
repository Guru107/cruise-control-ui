import React,{Component} from 'react'
import { getClusterLoad } from './api'

class LoadView extends Component {
	
	componentDidMount() {
		getClusterLoad()
		.then(res => {
			console.log(res)
			//this.props.updateState(res,'load')
		})
	}

	render(){
		
		return (
			<div>
				
			</div>
		)
	}
}

export default LoadView