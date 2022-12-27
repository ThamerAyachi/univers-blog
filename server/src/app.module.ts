import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { TopicModule } from './topic/topic.module';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRootAsync(typeOrmConfigAsync),
		TopicModule,
		AuthModule,
		BlogModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
