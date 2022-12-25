import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getCurrentDate } from 'src/shared/methods';
import { TopicEntity } from 'src/typeorm/TopicEntity';
import { Repository } from 'typeorm';
import { CreateTopicDto } from './dto/createTopic.dto';

@Injectable()
export class TopicService {
	constructor(
		@InjectRepository(TopicEntity)
		private readonly topicRepository: Repository<TopicEntity>,
	) {}

	async getTopics() {
		return this.topicRepository.find();
	}

	async createTopic(createTopicDto: CreateTopicDto) {
		const topic = this.topicRepository.create({
			...createTopicDto,
			createAt: getCurrentDate(),
			updateAt: getCurrentDate(),
		});

		return await this.topicRepository.save(topic);
	}

	async findOne(condition: any) {
		const topic = this.topicRepository.findOneBy(condition);

		return topic;
	}
}
