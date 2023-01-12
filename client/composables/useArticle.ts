import IBlog from "~~/types/IBlog";

export async function useArticles() {
	try {
		const config = useRuntimeConfig();
		const res = await $fetch<IBlog[]>(`${config.public.API_URL}/blog`, {
			method: "GET",
		});
		return res;
	} catch (e) {
		console.log(e);
	}
}
