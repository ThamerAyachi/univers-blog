import { reactive } from "vue";

const store = reactive({
	token: "",

	SET_TOKEN(token: string): void {
		this.token = token;
	},
});

export default store;
