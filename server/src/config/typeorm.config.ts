import { ConfigModule, ConfigService } from '@nestjs/config';
import {
	TypeOrmModuleAsyncOptions,
	TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export class TypeOrmConfig {
	static getOrmConfig(config: ConfigService): TypeOrmModuleOptions {
		return {
			type: 'postgres',
			host: config.get('DB_HOST'),
			port: +config.get('DB_PORT'),
			username: config.get('DB_USERNAME'),
			password: config.get('DB_PASSWORD'),
			database: config.get('DB_DATABASE'),
			entities: [],
			synchronize: true,
		};
	}
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
	imports: [ConfigModule],
	useFactory: async (config: ConfigService): Promise<TypeOrmModuleOptions> =>
		TypeOrmConfig.getOrmConfig(config),
	inject: [ConfigService],
};
