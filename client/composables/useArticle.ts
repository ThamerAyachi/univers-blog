export async function useArticles() {
	try {
		const res = await $fetch("http://localhost:5000/api/blog", {
			method: "GET",
		});
		console.log(res);
	} catch (e) {
		console.log(e);
	}
}
