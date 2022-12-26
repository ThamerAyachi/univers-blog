import {
	BadRequestException,
	ClassSerializerInterceptor,
	Controller,
	Get,
	Param,
	UseInterceptors,
} from '@nestjs/common';
import { AuthService } from '../auth.service';
import { SerializedUser } from '../serialize/SerializedUser';

@Controller('user')
export class UserController {
	constructor(private readonly userService: AuthService) {}

	@Get('all')
	@UseInterceptors(ClassSerializerInterceptor)
	async fetchAllUsers(): Promise<SerializedUser[]> {
		return await this.userService.getAllUsers();
	}

	@Get('email/:email')
	@UseInterceptors(ClassSerializerInterceptor)
	async fetchUserByEmail(
		@Param('email') email: string,
	): Promise<SerializedUser> {
		const user = await this.userService.findOneBy({ email });
		if (!user)
			throw new BadRequestException(`User with email: "${email}" not found`);

		return new SerializedUser(user);
	}

	@Get('id/:id')
	@UseInterceptors(ClassSerializerInterceptor)
	async fetchUserById(@Param('id') id: string): Promise<SerializedUser> {
		const user = await this.userService.findOneBy({ id });
		if (!user) throw new BadRequestException(`User with id: "${id}" not found`);

		return new SerializedUser(user);
	}
}
