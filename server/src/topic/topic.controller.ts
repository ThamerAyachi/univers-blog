import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { CreateTopicDto } from './dto/createTopic.dto';
import { TopicService } from './topic.service';

@Controller('topic')
export class TopicController {
	constructor(private readonly topicService: TopicService) {}

	@Get('all')
	async getTopics() {
		return this.topicService.getTopics();
	}

	@Post('create')
	@UsePipes(ValidationPipe)
	async createTopic(@Body() createTopicDto: CreateTopicDto) {
		const topic = await this.topicService.findOne({
			name: createTopicDto.name,
		});
		if (topic)
			throw new BadRequestException(['This topic name is already exist']);
		return this.topicService.createTopic(createTopicDto);
	}

	@Get('single/:name')
	async getTopicByName(@Param('name') topicName: string) {
		return this.topicService.findOne({ name: topicName });
	}
}
