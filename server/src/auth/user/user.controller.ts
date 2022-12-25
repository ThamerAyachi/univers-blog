import {
	ClassSerializerInterceptor,
	Controller,
	Get,
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
}
