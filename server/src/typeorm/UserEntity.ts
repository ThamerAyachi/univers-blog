import { getCurrentDate } from 'src/shared/methods';
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
	fullName: string;

	@Column({ nullable: true })
	avatar: string;

	@Column({ type: 'longtext' })
	bio: string;

	@Column({ type: 'date', name: 'create_at', default: getCurrentDate() })
	createAt: Date;

	@Column({ type: 'date', name: 'update_at', default: getCurrentDate() })
	updateAt: Date;

	@OneToMany(() => BlogEntity, (BlogEntity) => BlogEntity.author)
	@JoinColumn()
	blogs: BlogEntity[];

	@OneToMany(() => CommentsEntity, (CommentsEntity) => CommentsEntity.author)
	comments: CommentsEntity[];
}
