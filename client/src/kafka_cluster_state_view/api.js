import { API_BASE_URL } from '../constants'
/**
 * @description This API gets the current state of Kafka cluster to which cruise control points to
 * @param {boolean} verbose 
 */
export async function getKafkaClusterState(verbose) {
  return await fetch(
    `${API_BASE_URL}/kafka_cluster_state?json=true&verbose=${verbose}`
  ).then(res => res.json())
}
