import { API_BASE_URL } from '../constants'

export async function getClusterLoad() {
  return await fetch(`${API_BASE_URL}/load?json=true`).then(res => res.json())
}
