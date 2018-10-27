import React, { useState, useEffect } from 'react'
import { getClusterLoad } from './api'
import Load from './Load'

function LoadView() {
  
  const [load, setClusterLoad] = useState({brokers: null, hosts: null})

  useEffect(()=>{
    getClusterLoad()
    .then(res => {
      setClusterLoad(res)
    })
  },[])

    const { brokers, hosts } = load
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

export default LoadView
