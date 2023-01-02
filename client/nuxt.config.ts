// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "nuxt-icons"],
	app: {
		head: {
			title: "Universe Blog",
			meta: [
				{
					name: "description",
					content:
						"Universe Blog🧾💫 is a community of amazing peoples. We're a place where all share, stay up-to-date and grow their careers.",
				},
			],
			link: [
				{
					rel: "icon",
					type: "image/png",
					href: "galaxy.png",
				},
			],
		},
	},
});
