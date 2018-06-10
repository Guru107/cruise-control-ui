import React, { Component } from 'react'
import { getClusterLoad } from './api'
import Load from './Load'

class LoadView extends Component {
  componentDidMount() {
    getClusterLoad()
      .then(res => {
        console.log(res)
        this.props.updateState(res, 'load')
      })
      .catch(err => console.error(err))
  }

  render() {
    const {
      load: { brokers, hosts }
    } = this.props
    return (
      <div>
        <h2>Load View</h2>
        {brokers && (
          <div>
            <h3>Broker Info</h3>
            {brokers.map((metricObject, index) => {
              return <Load key={`broker_${index}`} {...metricObject} />
            })}
          </div>
        )}

        {hosts && (
          <div>
            <h3>Host Info</h3>
            {hosts &&
              hosts.map((metricObject, index) => (
                <Load key={`hosts_${index}`} {...metricObject} />
              ))}
          </div>
        )}
      </div>
    )
  }
}

export default LoadView
