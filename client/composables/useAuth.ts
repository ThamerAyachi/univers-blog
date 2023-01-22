import axios from "axios";

import IsignUp from "~~/types/IsignUp";
import IsignIn from "~~/types/IsignIn";

import store from "~~/store";
import { ApiResult } from "~~/types/data";

export async function registerWithEmail(data: IsignUp): Promise<ApiResult> {
	try {
		const config = useRuntimeConfig();
		const res = await axios.post(`${config.public.API_URL}/auth/signup`, data);
		return [res.data, null];
	} catch (e) {
		return [null, (e as any).response.data.message];
	}
}

export async function enterWithEmail(data: IsignIn): Promise<ApiResult> {
	try {
		const config = useRuntimeConfig();
		const res = await axios.post(`${config.public.API_URL}/auth/signin`, data);
		return [res.data, null];
	} catch (e) {
		return [null, (e as any).response.data.message];
	}
}

export async function useUser(): Promise<ApiResult> {
	try {
		const config = useRuntimeConfig();
		const res = await axios.get(`${config.public.API_URL}/user`, {
			headers: {
				Authorization: useState("token").value as string,
			},
		});
		return [res.data, null];
	} catch (e) {
		useCookie("token").value = null;
		useState("token").value = null;
		return [null, e];
	}
}

export async function logout(): Promise<void> {
	useCookie("token").value = null;
	useState("token").value = null;
}
