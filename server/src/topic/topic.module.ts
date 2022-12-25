import { Module } from '@nestjs/common';
import { TopicService } from './topic.service';
import { TopicController } from './topic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopicEntity } from 'src/typeorm/TopicEntity';

@Module({
	imports: [TypeOrmModule.forFeature([TopicEntity])],
	controllers: [TopicController],
	providers: [TopicService],
})
export class TopicModule {}
