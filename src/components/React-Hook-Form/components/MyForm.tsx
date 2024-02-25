import { useCallback } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { MyFormType } from '../types/Form';

export default function MyForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		clearErrors,
		setValue,
		watch,
	} = useForm<MyFormType>({
		defaultValues: {
			name: 'John Doe',
		},
	});

	const onSuccessFormSubmit: SubmitHandler<MyFormType> = data => {
		console.log(data);
	};

	const onErrorFormSubmit: SubmitErrorHandler<MyFormType> = data => {
		console.error(data);
	};

	// validate the name field
	const isName = (data: any) => {
		console.log('Validating username...');
		return true; // if something goes wrong return false here
	};

	const handleClearErrors = useCallback(() => {
		clearErrors();
	}, []);

	const handleClearForm = useCallback(() => {
		reset({
			name: 'John Doe',
			password: '',
		});
	}, []);

	const handleSetName = useCallback(() => {
		setValue('name', 'Danil Ochagov');
	}, []);

	return (
		<div>
			<form
				className='mt-4'
				onSubmit={handleSubmit(onSuccessFormSubmit, onErrorFormSubmit)}
			>
				<h2 className='font-bold text-3xl text-gray-700'>
					Simple Form
				</h2>
				<input
					type='text'
					placeholder='Name'
					{...register('name', {
						required: 'You must fill out the field!',
						validate: isName,
					})}
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
					{...register('password', {
						required: 'You must fill out the field!',
						minLength: {
							value: 10,
							message:
								'Your password must be at least 10 characters!',
						},
					})}
					className='bg-transparent text-base text-gray-900 caret-yellow-600 border-b-blue-500 border-b-[0.0625rem] outline-none p-2 m-2 block'
				/>
				{errors.password && (
					<p className='text-lg text-red-600 ml-2 font-bold'>
						{errors.password.message}
					</p>
				)}
				<div className='mt-6 space-x-4'>
					<input
						type='submit'
						value='Send Data'
						className='bg-yellow-600 py-2 px-4 text-base rounded-lg cursor-pointer hover:bg-yellow-700'
					/>
					<input
						type='button'
						value='Clear Errors'
						onClick={handleClearErrors}
						className='bg-red-600 py-2 px-4 text-base rounded-lg cursor-pointer hover:bg-red-700'
					/>
					<input
						type='button'
						value='Clear Form'
						onClick={handleClearForm}
						className='bg-blue-500 py-2 px-4 text-base rounded-lg cursor-pointer hover:bg-blue-600'
					/>
					<input
						type='button'
						value='Set name'
						onClick={handleSetName}
						className='bg-blue-500 py-2 px-4 text-base rounded-lg cursor-pointer hover:bg-blue-600'
					/>
				</div>
			</form>
			<div className='mt-4'>
				<p className='italic text-sm'>Watching name: {watch('name')}</p>
				<p className='italic text-sm'>
					Watching age: {watch('password')}
				</p>
			</div>
		</div>
	);
}
