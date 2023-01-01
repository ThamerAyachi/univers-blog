import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { TopicModule } from './topic/topic.module';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { CommentModule } from './comment/comment.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRootAsync(typeOrmConfigAsync),
		TopicModule,
		AuthModule,
		BlogModule,
		CommentModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
