import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/typeorm/UserEntity';
import { UserController } from './user/user.controller';

@Module({
	imports: [TypeOrmModule.forFeature([UserEntity])],
	controllers: [AuthController, UserController],
	providers: [AuthService],
})
export class AuthModule {}
