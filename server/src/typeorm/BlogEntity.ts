import {
	Column,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { CommentsEntity } from './CommentsEntity';
import { TopicEntity } from './TopicEntity';
import { UserEntity } from './UserEntity';

@Entity({ name: 'blogs' })
export class BlogEntity {
	@PrimaryGeneratedColumn({ type: 'bigint' })
	id: number;

	@Column({ type: 'longtext' })
	title: string;

	@Column({ type: 'longtext' })
	content: string;

	@Column({ nullable: true })
	cover: string;

	@Column({ default: 0 })
	views: number;

	@Column({ type: 'date', name: 'create_at' })
	createAt: Date;

	@Column({ type: 'date', name: 'update_at' })
	updateAt: Date;

	@ManyToMany(() => TopicEntity)
	@JoinTable({ name: 'blogs_topics' })
	topics: TopicEntity[];

	@ManyToOne(() => UserEntity, (UserEntity) => UserEntity.blogs)
	@JoinColumn()
	author: UserEntity;

	@OneToMany(() => CommentsEntity, (CommentsEntity) => CommentsEntity.blog)
	comments: CommentsEntity[];
}
