import IsignUp from "~~/types/IsignUp";
import axios from "axios";

export async function registerWithEmail(data: IsignUp) {
	try {
		const config = useRuntimeConfig();
		const res = await axios.post(`${config.public.API_URL}/auth/signup`, data);
		return [res.data, null];
	} catch (e) {
		return [null, (e as any).response.data.message];
	}
}
