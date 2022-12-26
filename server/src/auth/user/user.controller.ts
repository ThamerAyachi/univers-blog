import {
	BadRequestException,
	ClassSerializerInterceptor,
	Controller,
	Get,
	Param,
	UseInterceptors,
	Req,
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { Request } from 'express';
import { AuthService } from '../auth.service';
import { JwtAuthGuard } from '../guard/JwtAuth.guard';
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
		const user = await this.userService.findOneWithBy('email', email);
		if (!user)
			throw new BadRequestException(`User with email: "${email}" not found`);

		return new SerializedUser(user);
	}

	@Get('id/:id')
	@UseInterceptors(ClassSerializerInterceptor)
	async fetchUserById(@Param('id') id: string): Promise<SerializedUser> {
		const user = await this.userService.findOneWithBy('id', id);
		if (!user) throw new BadRequestException(`User with id: "${id}" not found`);

		return new SerializedUser(user);
	}

	@Get()
	@UseGuards(JwtAuthGuard)
	@UseInterceptors(ClassSerializerInterceptor)
	getUser(@Req() req: Request): SerializedUser {
		return new SerializedUser(req.user);
	}
}
