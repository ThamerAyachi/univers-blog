import { Controller } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Controller('user')
export class UserController {
	constructor(private readonly userService: AuthService) {}
}
