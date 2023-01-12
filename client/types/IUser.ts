import IBlog from "./IBlog";

export default interface IUser {
	id?: string;
	fullName?: string;
	email?: string;
	password?: string;
	avatar?: string;
	bio?: string;
	createAt?: string;
	updateAt?: string;
	blogs?: IBlog[];
}
