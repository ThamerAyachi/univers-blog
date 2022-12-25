import * as bcrypt from 'bcrypt';

export const encodePassword = (rawPassword: string) => {
	const SLAT = bcrypt.genSaltSync();
	return bcrypt.hashSync(rawPassword, SLAT);
};

export const comparePassword = (rawPassword: string, hash: string) => {
	return bcrypt.compareSync(rawPassword, hash);
};
