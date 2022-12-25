import { Exclude } from 'class-transformer';

export class SerializedUser {
	id: number;
	fullName: string;
	createAt: Date;
	updateAt: Date;
	avatar: string;
	bio: string;

	@Exclude()
	password: string;

	constructor(partial: Partial<SerializedUser>) {
		Object.assign(this, partial);
	}
}
