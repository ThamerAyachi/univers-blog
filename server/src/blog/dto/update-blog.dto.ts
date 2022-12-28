import { Length } from 'class-validator';

export class UpdateBlogDto {
	@Length(3, 100, { message: 'Title must be between 3 and 100 chars' })
	title: string;

	@Length(30, 10000, { message: 'Content must be more then 30 chars' })
	content: string;
}
