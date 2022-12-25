import { Length } from 'class-validator';

export class CreateTopicDto {
	@Length(3, 30, { message: 'Topic name must be between 3 and 30 chars.' })
	name: string;
}
