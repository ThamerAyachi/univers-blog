import IBlog from "~~/types/IBlog";
import ITopic from "~~/types/ITopic";

/**
 * Fetch All Articles
 * @returns IBlog[]
 */
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

/**
 * Fetch tags ( just first 5 )
 * @returns ITopic[]
 */
export const useTags = async () => {
	try {
		const config = useRuntimeConfig();
		const result = await $fetch<ITopic[]>(
			`${config.public.API_URL}/topic/all`,
			{
				method: "GET",
			}
		);
		if (result.length < 6) return result;
		return result.slice(1, 6);
	} catch (e) {
		console.log(e);
	}
};

/**
 * Fetch All Tags
 * @returns ITopic[]
 */
export const useAllTags = async () => {
	try {
		const config = useRuntimeConfig();
		const result = await $fetch<ITopic[]>(
			`${config.public.API_URL}/topic/all`,
			{
				method: "GET",
			}
		);
		return result;
	} catch (e) {
		console.log(e);
	}
};
