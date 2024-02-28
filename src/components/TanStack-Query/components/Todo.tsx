import { useIsFetching } from '@tanstack/react-query';
import { useAllTodos, useTodosByIds } from '../services/queries';
import { TodoLocal } from '../types/todo';

export default function Todo() {
	const todosIdsQuery = useAllTodos();
	const todosQueries = useTodosByIds(
		todosIdsQuery.data?.map((todo: TodoLocal) => todo.id)
	); // retrieve todo items by specific IDs
	const isFetching = useIsFetching();

	if (todosIdsQuery.isPending) return <p className='italic'>Loading...</p>;

	if (todosIdsQuery.isError)
		return <p className='font-bold text-red-700'>Error occurred!</p>;

	return (
		<div className='mt-4'>
			<p className='italic text-sm'>
				Query fetch status: {todosIdsQuery.fetchStatus}
			</p>
			<p className='italic text-sm'>
				Query data status: {todosIdsQuery.status}
			</p>
			<p className='italic text-sm'>Global isFetching: {isFetching}</p>
			<h2 className='font-bold text-2xl text-gray-700 mt-4'>
				useQuery() hook:
			</h2>
			{todosIdsQuery.isFetching ? (
				<p className='italic'>Loading data...</p>
			) : (
				<ul className='ml-8'>
					{todosIdsQuery.data.map(
						(todo: TodoLocal, index: number) => (
							<li key={index} className='list-disc'>
								<p className='text-gray-700'>
									ID: {todo.id} | {todo.title} |{' '}
									{todo.description}
								</p>
							</li>
						)
					)}
				</ul>
			)}
			<h2 className='font-bold text-2xl text-gray-700 mt-4'>
				useQueries() hook:
			</h2>
			<ul className='ml-8'>
				{todosQueries.map(({ data }, index: number) => (
					<li key={index} className='list-disc'>
						<p className='text-gray-700'>
							ID: {data?.id} | {data?.title} |{' '}
							{data?.completed ? 'Completed!' : 'In progress...'}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}
