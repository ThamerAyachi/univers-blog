import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from 'src/typeorm/BlogEntity';
import { TopicEntity } from 'src/typeorm/TopicEntity';
import { UserEntity } from 'src/typeorm/UserEntity';

@Module({
	imports: [TypeOrmModule.forFeature([BlogEntity, TopicEntity, UserEntity])],
	controllers: [BlogController],
	providers: [BlogService],
})
export class BlogModule {}
