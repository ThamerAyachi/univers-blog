import axios from "axios";

import IsignUp from "~~/types/IsignUp";
import IsignIn from "~~/types/IsignIn";

export async function registerWithEmail(data: IsignUp) {
	try {
		const config = useRuntimeConfig();
		const res = await axios.post(`${config.public.API_URL}/auth/signup`, data);
		return [res.data, null];
	} catch (e) {
		return [null, (e as any).response.data.message];
	}
}

export async function enterWithEmail(data: IsignIn) {
	try {
		const config = useRuntimeConfig();
		const res = await axios.post(`${config.public.API_URL}/auth/signin`, data);
		return [res.data, null];
	} catch (e) {
		return [null, (e as any).response.data.message];
	}
}
