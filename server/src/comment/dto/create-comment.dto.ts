import { Length } from 'class-validator';

export class CreateCommentDto {
	@Length(1, 3000, { message: 'comment must be not empty' })
	content: string;
}
