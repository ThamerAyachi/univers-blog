import IComment from "./IComment";
import ITopic from "./ITopic";
import IUser from "./IUser";

export default interface IBlog {
	id?: string;
	title?: string;
	content?: string;
	cover?: string;
	views?: number;
	createAt?: string;
	updateAt?: string;
	author?: IUser;
	topics?: ITopic[];
	comments?: IComment[];
}
