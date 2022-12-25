import {
	BadRequestException,
	Body,
	Controller,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { UserEntity } from 'src/typeorm/UserEntity';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { SerializedUser } from './serialize/SerializedUser';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('signup')
	@UsePipes(ValidationPipe)
	async signup(@Body() dto: SignupDto) {
		const ifUserFound = this.authService.findOneBy({ email: dto.email });
		if (ifUserFound) throw new BadRequestException(['Email already taken']);

		const user: UserEntity = await this.authService.signup(dto);
		return new SerializedUser(user);
	}
}
