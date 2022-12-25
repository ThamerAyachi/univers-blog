import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { TopicModule } from './topic/topic.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRootAsync(typeOrmConfigAsync),
		TopicModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
