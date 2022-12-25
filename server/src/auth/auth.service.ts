import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/typeorm/UserEntity';
import { Repository } from 'typeorm';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(UserEntity)
		private readonly userRepository: Repository<UserEntity>,
	) {}

	async signup(dto: SignupDto) {
		return dto;
	}
}
