import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MyFormSchema } from '../resolvers/schema';
import { MyFormType } from '../types/Form';

export default function ZodForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<MyFormType>({
		resolver: zodResolver(MyFormSchema),
	});

	const onSuccessFormSubmit: SubmitHandler<MyFormType> = data => {
		console.log(data);
	};

	return (
		<div className='mt-10'>
			<h2 className='font-bold text-3xl text-gray-700'>
				Using Zod schema validation:
			</h2>
			<form onSubmit={handleSubmit(onSuccessFormSubmit)}>
				<input
					type='text'
					placeholder='Name'
					{...register('name')}
					className='bg-transparent text-base text-gray-900 caret-yellow-600 border-b-blue-500 border-b-[0.0625rem] outline-none p-2 m-2 block'
				/>
				{errors.name && (
					<p className='text-lg text-red-600 ml-2 font-bold'>
						{errors.name.message}
					</p>
				)}
				<input
					type='password'
					placeholder='Password'
					{...register('password')}
					className='bg-transparent text-base text-gray-900 caret-yellow-600 border-b-blue-500 border-b-[0.0625rem] outline-none p-2 m-2 block'
				/>
				{errors.password && (
					<p className='text-lg text-red-600 ml-2 font-bold'>
						{errors.password.message}
					</p>
				)}
				<input
					type='submit'
					value='Send Data'
					className='bg-yellow-600 mt-4 py-2 px-4 text-base rounded-lg cursor-pointer hover:bg-yellow-700'
				/>
			</form>
		</div>
	);
}
