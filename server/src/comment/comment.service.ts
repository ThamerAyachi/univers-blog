import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getCurrentDate } from 'src/shared/methods';
import { BlogEntity } from 'src/typeorm/BlogEntity';
import { CommentsEntity } from 'src/typeorm/CommentsEntity';
import { UserEntity } from 'src/typeorm/UserEntity';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
	constructor(
		@InjectRepository(UserEntity)
		private readonly userRepository: Repository<UserEntity>,
		@InjectRepository(BlogEntity)
		private readonly blogRepository: Repository<BlogEntity>,
		@InjectRepository(CommentsEntity)
		private readonly commentsRepository: Repository<CommentsEntity>,
	) {}

	async create(
		createCommentDto: CreateCommentDto,
		blogId: string,
		_user: UserEntity,
	): Promise<CommentsEntity> {
		const user = await this.findOneUser({ email: _user.email });
		const blog = await this.findOneBlog({ id: blogId });
		if (!blog)
			throw new BadRequestException(`Article with id #${blogId} not found`);

		const comment = this.commentsRepository.create({
			...createCommentDto,
			createAt: getCurrentDate(),
		});
		comment.author = user;
		comment.blog = blog;
		const finalComment = await this.commentsRepository.save(comment);
		delete finalComment.author.password;
		return finalComment;
	}

	async findOneUser(condition: any): Promise<UserEntity> {
		const user = await this.userRepository.findOneBy(condition);
		return user;
	}

	async findOneBlog(condition: any): Promise<BlogEntity> {
		const blog = await this.blogRepository.findOneBy(condition);
		return blog;
	}

	async findOne(condition: any): Promise<CommentsEntity> {
		const comment = await this.commentsRepository.findOneBy(condition);
		return comment;
	}

	async findOneComment(
		parameter: string,
		value: string,
	): Promise<CommentsEntity> {
		const comment = await this.commentsRepository
			.createQueryBuilder('comments')
			.leftJoinAndSelect('comments.author', 'author')
			.leftJoinAndSelect('comments.blog', 'blog')
			.where(`comments.${parameter}= :condition`, { condition: value })
			.getOne();

		if (comment) delete comment.author.password;
		return comment;
	}

	remove(id: number) {
		return `This action removes a #${id} comment`;
	}
}
