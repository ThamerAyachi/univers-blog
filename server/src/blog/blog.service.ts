import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SerializedUser } from 'src/auth/serialize/SerializedUser';
import { getCurrentDate } from 'src/shared/methods';
import { BlogEntity } from 'src/typeorm/BlogEntity';
import { TopicEntity } from 'src/typeorm/TopicEntity';
import { UserEntity } from 'src/typeorm/UserEntity';
import { Repository } from 'typeorm';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogService {
	constructor(
		@InjectRepository(BlogEntity)
		private readonly blogRepository: Repository<BlogEntity>,
		@InjectRepository(TopicEntity)
		private readonly topicRepository: Repository<TopicEntity>,
		@InjectRepository(UserEntity)
		private readonly userRepository: Repository<UserEntity>,
	) {}

	async create(createBlogDto: CreateBlogDto, rawUser: UserEntity) {
		const user = await this.userRepository.findOneBy({
			email: rawUser.email,
		});

		const blog = this.blogRepository.create({
			title: createBlogDto.title,
			content: createBlogDto.content,
			cover: createBlogDto.cover,
			createAt: getCurrentDate(),
			updateAt: getCurrentDate(),
		});

		/* Set Topics required for blog */
		const finalTopics: TopicEntity[] = [];
		const _topics = await this.topicRepository.find();
		for (let topic of createBlogDto.topics) {
			let flag = 0;
			_topics.forEach(async (_topic) => {
				if (topic == _topic.name) flag++;
			});
			if (flag == 0) {
				let _topic = this.topicRepository.create({
					name: topic,
					createAt: getCurrentDate(),
					updateAt: getCurrentDate(),
				});
				_topic = await this.topicRepository.save(_topic);
				finalTopics.push(_topic);
			} else {
				const _topic = await this.topicRepository.findOneBy({ name: topic });
				finalTopics.push(_topic);
			}
		}
		/* Final set Topics and get it in "finalTopic" */

		blog.topics = finalTopics;
		blog.author = user;
		await this.blogRepository.save(blog);
	}

	async findAll(): Promise<BlogEntity[]> {
		let blogs = await this.blogRepository.find({
			relations: ['author', 'topics'],
		});
		blogs.forEach((blog) => delete blog.author.password);
		return blogs;
	}

	async findOne(parameter: string, value: string): Promise<BlogEntity> {
		const blog = await this.blogRepository
			.createQueryBuilder('blog')
			.leftJoinAndSelect('blog.author', 'author')
			.leftJoinAndSelect('blog.comments', 'comments')
			.where(`blog.${parameter}= :condition`, { condition: value })
			.getOne();
		if (blog) delete blog.author.password;
		return blog;
	}

	async blogView(id: number): Promise<void> {
		const blog = await this.blogRepository.findOneBy({ id });
		if (!blog)
			throw new BadRequestException([`Article with id #${id} not found`]);

		blog.views++;
		await this.blogRepository.save(blog);
	}

	async update(id: number, updateBlogDto: UpdateBlogDto) {
		const blog = await this.blogRepository.findOneBy({ id });
		if (!blog)
			throw new BadRequestException(`Article with id #${id} not found`);

		blog.title = updateBlogDto.title;
		blog.content = updateBlogDto.content;
		blog.updateAt = getCurrentDate() as unknown as Date;

		await this.blogRepository.save(blog);
	}

	async remove(id: string) {
		const blog = await this.blogRepository.findOneBy({ id: +id });
		if (!blog)
			throw new BadRequestException(`Article with id #${id} not found`);

		await this.blogRepository.remove(blog);
	}
}
