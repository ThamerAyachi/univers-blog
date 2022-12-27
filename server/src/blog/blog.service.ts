import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
		const { id } = await this.userRepository.findOneBy({
			email: rawUser.email,
		});
		return id;
	}

	async findAll(): Promise<BlogEntity[]> {
		return await this.blogRepository.find();
	}

	findOne(id: number) {
		return `This action returns a #${id} blog`;
	}

	update(id: number, updateBlogDto: UpdateBlogDto) {
		return `This action updates a #${id} blog`;
	}

	remove(id: number) {
		return `This action removes a #${id} blog`;
	}
}
