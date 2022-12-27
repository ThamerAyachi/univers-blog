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
		return this.blogService.create(createBlogDto, req.user as UserEntity);
	}

	@Get()
	async findAll(): Promise<BlogEntity[]> {
		return await this.blogService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.blogService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
		return this.blogService.update(+id, updateBlogDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.blogService.remove(+id);
	}
}
