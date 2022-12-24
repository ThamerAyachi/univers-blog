import { getCurrentDate } from 'src/shared/methods';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

	@Column({ type: 'text' })
	bio: string;

	@Column({ type: 'date', name: 'create_at', default: getCurrentDate() })
	createAt: Date;

	@Column({ type: 'date', name: 'update_at', default: getCurrentDate() })
	updateAt: Date;
}
