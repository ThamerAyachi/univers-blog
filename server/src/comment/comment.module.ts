import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/typeorm/UserEntity';
import { BlogEntity } from 'src/typeorm/BlogEntity';
import { CommentsEntity } from 'src/typeorm/CommentsEntity';

@Module({
	imports: [TypeOrmModule.forFeature([UserEntity, BlogEntity, CommentsEntity])],
	controllers: [CommentController],
	providers: [CommentService],
})
export class CommentModule {}
