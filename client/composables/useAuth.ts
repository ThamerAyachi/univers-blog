import axios from "axios";

import IsignUp from "~~/types/IsignUp";
import IsignIn from "~~/types/IsignIn";

import { ApiResult } from "~~/types/data";
import IUser from "~~/types/IUser";

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

export async function useUser(): Promise<IUser | null> {
	if (!useCookie("token").value) return null;
	let token: string = (useCookie("token").value as string).split(" ")[1];
	return JSON.parse(atob(token.split(".")[1]));
}

export async function logout(): Promise<void> {
	useCookie("token").value = null;
	useState("token").value = null;
}
