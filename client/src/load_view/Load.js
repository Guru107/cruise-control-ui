import React, { Fragment } from 'react'

export default function Load(props) {
  return (
    <Fragment>
      {renderMetrics(props['Host'], 'Host Name')}
      {renderMetrics(props['Broker'], 'Broker Id')}
      {renderMetrics(props['BrokerState'], 'Broker State')}
      {renderMetrics(props['CpuPct'], 'CPU %')}
      {renderMetrics(props['DiskMB'], 'Disk Used in MB')}
      {renderMetrics(props['FollowerNwInRate'], 'Follower Byte in rate')}
      {renderMetrics(props['Leaders'], 'Number of partition leaders')}
      {renderMetrics(props['NnwOutRate'], 'Network Byte out rate')}
      {renderMetrics(props['PnwOutRate'], 'Potential Network Byte out rate')}
      {renderMetrics(props['Replicas'], 'Number of replicas')}
    </Fragment>
  )
}

function renderMetrics(metric, description) {
  return metric === undefined ? null : <p>{`${description}: ${metric}`}</p>
}
