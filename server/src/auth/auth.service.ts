import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getCurrentDate } from 'src/shared/methods';
import { UserEntity } from 'src/typeorm/UserEntity';
import { encodePassword } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(UserEntity)
		private readonly userRepository: Repository<UserEntity>,
	) {}

	async signup(dto: SignupDto): Promise<UserEntity> {
		const password = encodePassword(dto.password);
		const user = await this.userRepository.create({
			...dto,
			password,
			createAt: getCurrentDate(),
			updateAt: getCurrentDate(),
		});

		return await this.userRepository.save(user);
	}

	async findOneBy(condition: any): Promise<UserEntity> {
		const user = await this.userRepository.findOneBy(condition);
		return user;
	}
}
