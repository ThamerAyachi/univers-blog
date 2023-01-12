import IBlog from "./IBlog";

export default interface ITopic {
	id?: string;
	name?: string;
	createAt?: string;
	updateAt?: string;
	blogs?: IBlog[];
}
