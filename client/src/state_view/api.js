import { API_BASE_URL } from '../constants'
/**
 * @description This API gets the current state of Cruise Control service.
 */
export async function getCruiseControlState() {
  const response = await fetch(
    `${API_BASE_URL}/state?json=true&verbose=true`
  ).then(res => res.json())
  return response
}
