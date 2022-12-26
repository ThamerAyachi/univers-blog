import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/typeorm/UserEntity';
import { UserController } from './user/user.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategys/jwt.strategy';
import { JwtAuthGuard } from './guard/JwtAuth.guard';

@Module({
	imports: [
		TypeOrmModule.forFeature([UserEntity]),
		JwtModule.register({
			secret: 'secret',
			signOptions: { expiresIn: '1d' },
		}),
	],
	controllers: [AuthController, UserController],
	providers: [AuthService, JwtStrategy, JwtAuthGuard],
})
export class AuthModule {}
