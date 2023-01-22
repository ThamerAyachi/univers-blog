export default defineNuxtRouteMiddleware((to, from) => {
	if (useState("token").value) {
		return navigateTo("/");
	}
});
