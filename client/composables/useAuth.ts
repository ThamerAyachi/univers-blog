import IsignUp from "~~/types/IsignUp";
import axios from "axios";

export async function registerWithEmail(data: IsignUp) {
	try {
		const res = await axios.post("http://localhost:5000/api/auth/signup", data);
		return [res.data, null];
	} catch (e) {
		return [null, (e as any).response.data.message];
	}
}
