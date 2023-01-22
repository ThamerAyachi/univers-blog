import store from "~~/store";
import { Context } from "@nuxt/types";

export default function ({ redirect }: Context) {
	if (store.token != "") {
		redirect("/");
	}
}
