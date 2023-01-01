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
import { UserEntity } from 'src/typeorm/UserEntity';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comment')
export class CommentController {
	constructor(private readonly commentService: CommentService) {}

	@Post(':blogId')
	@UsePipes(ValidationPipe)
	@UseGuards(JwtAuthGuard)
	async create(
		@Body() createCommentDto: CreateCommentDto,
		@Param('blogId') blogId: string,
		@Req() req: Request,
	) {
		return this.commentService.create(
			createCommentDto,
			blogId,
			req.user as UserEntity,
		);
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.commentService.findOne(+id);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.commentService.remove(+id);
	}
}
