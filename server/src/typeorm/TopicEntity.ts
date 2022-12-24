import { getCurrentDate } from 'src/shared/methods';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'topics' })
export class TopicEntity {
	@PrimaryGeneratedColumn({ type: 'bigint' })
	id: number;

	@Column()
	name: string;

	@Column({ type: 'date', name: 'create_at', default: getCurrentDate() })
	createAt: Date;

	@Column({ type: 'date', name: 'update_at', default: getCurrentDate() })
	updateAt: Date;
}
