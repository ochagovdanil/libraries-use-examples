import { FormEvent, useState } from 'react';
import axios from 'axios';
import { User } from '../types/user';

export default function Login() {
	const [isErrorShown, setIsErrorShown] = useState<boolean>(false);
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [user, setUser] = useState<User>(Object.create(null));

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		setIsErrorShown(false); // clear the error message if it exists

		try {
			// in order to fake this we just fetch a user from the REST API
			const { data } = await axios.get(
				'https://jsonplaceholder.typicode.com/users/1'
			);
			setUser(data);
		} catch {
			setIsErrorShown(true);
		}
	}

	return (
		<div>
			<h2 className='text-2xl text-gray-600 font-bold my-6'>
				Simple Login Form
			</h2>
			<form onSubmit={handleSubmit}>
				<div className='space-x-4'>
					<input
						type='text'
						placeholder='username'
						value={username}
						onChange={e => setUsername(e.target.value)}
						className='border-b-2 border-b-yellow-700 outline-none'
					/>
					<input
						type='password'
						placeholder='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						className='border-b-2 border-b-yellow-700 outline-none'
					/>
					<input
						type='submit'
						value='Login'
						disabled={!(username && password)}
						className='cursor-pointer bg-green-500 py-1 px-6 rounded-lg hover:bg-green-600 disabled:cursor-default disabled:bg-gray-500'
					/>
				</div>
				<p
					className='text-base text-red-500 font-bold my-4'
					style={{ visibility: isErrorShown ? 'visible' : 'hidden' }}
					data-testid='error'
				>
					Something went wrong!
				</p>
				<p className='text-base text-gray-500'>
					User email address:{' '}
					<span className='font-bold' data-testid='email'>
						{user.email ? user.email : 'empty yet!'}
					</span>
				</p>
			</form>
		</div>
	);
}
