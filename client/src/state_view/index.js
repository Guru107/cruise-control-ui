import React, {useEffect, useState } from 'react'
import { getCruiseControlState } from './api'

function StateView() {

  const [ccstate,setCCState] = useState({AnalyzerState:null,ExecutorState:null,MonitorState:null})

    useEffect(()=>{
      getCruiseControlState().then(response => {
        setCCState(response)
      })
    },[])
 
    const { AnalyzerState, ExecutorState, MonitorState } = ccstate
 
    return (
      <div>
        <h2>Cruise Control State</h2>
        {
          AnalyzerState && AnalyzerState.isProposalReady ? (
          <div>
            <h3>Analyzer State</h3>
            <ul>
              {AnalyzerState.readyGoals.map(goal => {
                return <li key={goal}>{goal}</li>
              })}
            </ul>
          </div>
        ) : null}
        {ExecutorState && (
          <div>
            <h3>Executor State</h3>
            {ExecutorState && ExecutorState.state}
          </div>
        )}
        {MonitorState && (
          <div>
            <h3>Monitor State</h3>
            <div>Current Monitoring State: {MonitorState.state}</div>
            <div>Percentage trained: {MonitorState.trainingPct}</div>
            <div>
              Is training complete: {JSON.stringify(MonitorState.trained)}
            </div>
            <div>Total partitions: {MonitorState.numTotalPartitions}</div>
            <div>
              Number of valid partitions: {MonitorState.numValidPartitions}
            </div>
            <div>
              Number of flawed partitions: {MonitorState.numFlawedPartitions}
            </div>
            <div>
              Number of monitored windows: {MonitorState.numMonitoredWindows}
            </div>
            <div>Monitoring coverage: {MonitorState.monitoringCoveragePct}</div>
            <div>
              Monitored windows:{' '}
              {MonitorState.monitoredWindows &&
                Object.keys(MonitorState.monitoredWindows).map(
                  monitoredWindows => {
                    return `${monitoredWindows}:${
                      MonitorState.monitoredWindows[monitoredWindows]
                    }`
                  }
                )}
            </div>
          </div>
        )}
      </div>
    )
  }
export default StateView
