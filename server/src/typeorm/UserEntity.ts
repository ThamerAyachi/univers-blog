import {
	Column,
	Entity,
	JoinColumn,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { BlogEntity } from './BlogEntity';
import { CommentsEntity } from './CommentsEntity';

@Entity({ name: 'users' })
export class UserEntity {
	@PrimaryGeneratedColumn({ type: 'bigint' })
	id: number;

	@Column({ unique: true })
	email: string;

	@Column()
	password: string;

	@Column({ name: 'full_name' })
	fullName: string;

	@Column({ nullable: true })
	avatar: string;

	@Column({ type: 'longtext' })
	bio: string;

	@Column({ type: 'date', name: 'create_at' })
	createAt: Date;

	@Column({ type: 'date', name: 'update_at' })
	updateAt: Date;

	@OneToMany(() => BlogEntity, (BlogEntity) => BlogEntity.author)
	@JoinColumn()
	blogs: BlogEntity[];

	@OneToMany(() => CommentsEntity, (CommentsEntity) => CommentsEntity.author)
	comments: CommentsEntity[];
}
