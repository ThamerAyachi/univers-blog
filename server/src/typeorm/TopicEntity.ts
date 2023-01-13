import {
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { BlogEntity } from './BlogEntity';

@Entity({ name: 'topics' })
export class TopicEntity {
	@PrimaryGeneratedColumn({ type: 'bigint' })
	id: number;

	@Column({ unique: true })
	name: string;

	@Column({ type: 'date', name: 'create_at' })
	createAt: Date;

	@Column({ type: 'date', name: 'update_at' })
	updateAt: Date;

	@ManyToMany(() => BlogEntity)
	@JoinTable({ name: 'blogs_topics' })
	blogs: BlogEntity[];
}
