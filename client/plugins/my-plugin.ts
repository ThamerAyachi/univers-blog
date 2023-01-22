export default defineNuxtPlugin(() => {
	addRouteMiddleware(
		"global-middleware",
		(to, from) => {
			useState("token").value = useCookie("token");
		},
		{ global: true }
	);
});
