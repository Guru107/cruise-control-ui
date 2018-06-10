import { API_BASE_URL } from '../constants'

export default async function getKafkaClusterState(verbose) {
  return await fetch(
    `${API_BASE_URL}/kafka_cluster_state?json=true&verbose=${verbose}`
  ).then(res => res.json())
}
