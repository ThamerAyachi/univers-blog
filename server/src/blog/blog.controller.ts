import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	UsePipes,
	ValidationPipe,
	UseGuards,
	Req,
	HttpStatus,
	BadRequestException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/guard/JwtAuth.guard';
import { BlogEntity } from 'src/typeorm/BlogEntity';
import { UserEntity } from 'src/typeorm/UserEntity';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Controller('blog')
export class BlogController {
	constructor(private readonly blogService: BlogService) {}

	@Post()
	@UsePipes(ValidationPipe)
	@UseGuards(JwtAuthGuard)
	create(@Body() createBlogDto: CreateBlogDto, @Req() req: Request) {
		this.blogService.create(createBlogDto, req.user as UserEntity);
		return { message: 'Blog created', status: HttpStatus.CREATED };
	}

	@Get()
	async findAll(): Promise<BlogEntity[]> {
		return await this.blogService.findAll();
	}

	@Get('single/:id')
	async findOne(@Param('id') id: string): Promise<BlogEntity> {
		const blog = await this.blogService.findOne('id', id);

		if (!blog)
			throw new BadRequestException([`Article with id #${id} not found`]);

		this.blogService.blogView(+id);

		return blog;
	}

	@Patch(':id')
	@UseGuards(JwtAuthGuard)
	@UsePipes(ValidationPipe)
	async update(
		@Param('id') id: string,
		@Body() updateBlogDto: UpdateBlogDto,
		@Req() req: Request,
	) {
		const blog = await this.blogService.findOne('id', id);
		if (!blog)
			throw new BadRequestException([`Article with id #${id} not found`]);

		const user: UserEntity = req.user as UserEntity;
		if (blog.author.email != user.email)
			throw new BadRequestException([
				" You don't have proems to update this article",
			]);

		await this.blogService.update(+id, updateBlogDto);

		return { message: 'Update succuss', status: HttpStatus.OK };
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.blogService.remove(+id);
	}
}
