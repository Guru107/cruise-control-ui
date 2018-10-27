import React, { Fragment, useState, useEffect } from 'react'
import { getKafkaClusterState } from './api'
function KafkaClusterStateView() {

  const [kafkaClusterState, setKafkaClusterState] = useState({})

  useEffect(() => {
    getKafkaClusterState(false).then(kafkaClusterState => {
      console.log(kafkaClusterState)
      setKafkaClusterState(kafkaClusterState)
    })
  },[])

 

    const { KafkaBrokerState } = kafkaClusterState
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

export default KafkaClusterStateView
