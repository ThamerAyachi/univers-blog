import { IsEmail, Length } from 'class-validator';

export class SignupDto {
	@Length(3, 30, { message: 'Full name must be between 3 and 30 chars.' })
	fullName: string;

	@IsEmail()
	email: string;

	@Length(8, 20, { message: 'Password must be between 8 and 20 chars.' })
	password: string;
}
