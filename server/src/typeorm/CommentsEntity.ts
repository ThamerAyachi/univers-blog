import { getCurrentDate } from 'src/shared/methods';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BlogEntity } from './BlogEntity';
import { UserEntity } from './UserEntity';

@Entity({ name: 'comments' })
export class CommentsEntity {
	@PrimaryGeneratedColumn({ type: 'bigint' })
	id: number;

	@Column({ type: 'longtext' })
	content: string;

	@Column({ type: 'date', name: 'create_at', default: getCurrentDate() })
	createAt: Date;

	@ManyToOne(() => UserEntity, (UserEntity) => UserEntity.comments)
	author: UserEntity;

	@ManyToOne(() => BlogEntity, (BlogEntity) => BlogEntity.comments)
	blog: BlogEntity;
}
