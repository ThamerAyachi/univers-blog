import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { CreateTopicDto } from './dto/createTopic.dto';
import { TopicService } from './topic.service';

@Controller('topic')
export class TopicController {
	constructor(private readonly topicService: TopicService) {}

	@Get('all')
	async getTopics() {
		return [];
	}

	@Post('create')
	@UsePipes(ValidationPipe)
	async createTopic(@Body() createTopicDto: CreateTopicDto) {
		return createTopicDto;
	}

	@Get('single/:name')
	async getTopicByName(@Param('name') topicName: string) {
		return topicName;
	}
}
