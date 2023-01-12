import IBlog from "./IBlog";
import IUser from "./IUser";

export default interface IComment {
	id?: string;
	content?: string;
	createAt?: string;
	author?: IUser;
	blog?: IBlog;
}
