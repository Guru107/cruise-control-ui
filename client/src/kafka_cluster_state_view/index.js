import React, { Component, Fragment } from 'react'
import { getKafkaClusterState } from './api'
class KafkaClusterStateView extends Component {
  componentDidMount() {
    getKafkaClusterState(false).then(kafkaClusterState => {
      this.props.updateState(kafkaClusterState, 'kafka_cluster_state')
    })
  }
  render() {
    const { KafkaBrokerState } = this.props.kafka_cluster_state
    return (
      <div>
        <h2>Kafka Cluster State</h2>
        <div>
          {KafkaBrokerState && (
            <Fragment>
              <h3>Number of leaders per broker</h3>
            </Fragment>
          )}
        </div>
      </div>
    )
  }
}

export default KafkaClusterStateView
