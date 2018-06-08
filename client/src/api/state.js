import { BASE_URL } from './constants'

export async function getCruiseControlState() {
	const response = await fetch(`${BASE_URL}/state?json=true`).then(res=>res.json())
	return response
}