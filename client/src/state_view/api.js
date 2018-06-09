import { API_BASE_URL } from '../constants'
export async function getCruiseControlState() {
	const response = await fetch(`${API_BASE_URL}/state?json=true`).then(res=>res.json())
	return response
}