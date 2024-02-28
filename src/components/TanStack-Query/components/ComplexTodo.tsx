import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateTodo } from '../services/mutations';
import { useAllTodos } from '../services/queries';
import { TodoLocal } from '../types/todo';

export default function ComplexTodo() {
	const todosQuery = useAllTodos();
	const createTodoMutation = useCreateTodo();
	const { register, handleSubmit, reset } = useForm<TodoLocal>();

	const handleCreateTodoSubmit: SubmitHandler<TodoLocal> = async data => {
		await createTodoMutation.mutateAsync(data);
		reset();
		console.log('New todo item added!');
	};

	if (todosQuery.isPending) return <p className='italic'>Loading...</p>;

	if (todosQuery.isError)
		return <p className='font-bold text-red-700'>Error occurred!</p>;

	return (
		<div>
			<h2 className='font-bold text-2xl text-gray-700 mt-10'>
				Creating new <mark>todo</mark> items:
			</h2>
			<form onSubmit={handleSubmit(handleCreateTodoSubmit)}>
				<input
					type='text'
					placeholder='Title'
					{...register('title')}
					className='caret-yellow-500 outline-none text-gray-900 p-2 border-b-2 border-b-blue-600 m-2'
				/>
				<input
					type='text'
					placeholder='Description'
					{...register('description')}
					className='caret-yellow-500 outline-none text-gray-900 p-2 border-b-2 border-b-blue-600 m-2'
				/>
				<input
					type='submit'
					value={
						createTodoMutation.isPending
							? 'Updating'
							: 'Create Todo'
					}
					disabled={createTodoMutation.isPending}
					className='text-gray-800 py-2 px-4 bg-yellow-600 rounded-lg cursor-pointer hover:bg-yellow-700 disabled:bg-gray-600'
				/>
			</form>
			{todosQuery.isFetching ? (
				<p className='italic'>Loading data...</p>
			) : (
				<ul className='mt-4'>
					{todosQuery.data.map((todo: TodoLocal, index: number) => (
						<li
							key={index}
							className='list-disc ml-8 text-gray-700 italic'
						>
							{todo.id} | {todo.title} | {todo.description} |{' '}
							{todo.checked ? 'Completed!' : 'In progress...'}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
