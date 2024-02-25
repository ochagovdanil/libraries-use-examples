import { ZodType, z } from 'zod';
import { MyFormType } from '../types/Form';

export const MyFormSchema: ZodType<MyFormType> = z.object({
	name: z.string().min(1, {
		message: 'You must fill out the field!',
	}),
	password: z
		.string()
		.min(1, {
			message: 'You must fill out the field!',
		})
		.min(10, {
			message: 'Your password must be at least 10 characters!',
		}),
});
