import {
	BadRequestException,
	Body,
	ClassSerializerInterceptor,
	Controller,
	Post,
	UnauthorizedException,
	UseInterceptors,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { JwtService } from '@nestjs/jwt/dist';
import { UserEntity } from 'src/typeorm/UserEntity';
import { comparePassword } from 'src/utils/bcrypt';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { SerializedUser } from './serialize/SerializedUser';

@Controller('auth')
export class AuthController {
	constructor(
		private readonly authService: AuthService,
		private readonly jwtService: JwtService,
	) {}

	@Post('signup')
	@UsePipes(ValidationPipe)
	@UseInterceptors(ClassSerializerInterceptor)
	async signup(@Body() dto: SignupDto) {
		const ifUserFound = await this.authService.findOneBy({ email: dto.email });
		if (ifUserFound) throw new BadRequestException(['Email already taken']);

		const user: UserEntity = await this.authService.signup(dto);
		return new SerializedUser(user);
	}

	@Post('signin')
	@UsePipes(ValidationPipe)
	async signin(@Body() dto: SignInDto) {
		const email = dto.email;
		const user = await this.authService.findOneBy({ email });
		if (!user) throw new UnauthorizedException('invalid credentials');
		if (!(await comparePassword(dto.password, user.password)))
			throw new UnauthorizedException('invalid credentials');

		delete user.password;
		const token = await this.jwtService.signAsync({
			...user,
		});

		return {
			message: 'Sign In Succuss!',
			status: HttpStatus.CREATED,
			token: token,
			user: user,
		};
	}
}
