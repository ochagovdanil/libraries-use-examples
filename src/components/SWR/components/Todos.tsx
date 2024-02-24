import { useCallback } from 'react';
import { useTodos } from '../services/queries';
import { Todo } from '../types/todo';

const MAX_PAGE: number = 10;

const Todos = () => {
	const { data, isLoading, isValidating, setSize, size } = useTodos();

	const handleClick = useCallback(() => {
		if (size === MAX_PAGE) return; // reached the end

		setSize(size + 1);
	}, [size]);

	if (isLoading) return <p className='text-base italic'>Loading...</p>;

	return (
		<div className='mb-40'>
			<h2 className='font-bold text-2xl text-gray-600 my-4'>
				Want to read the list of 200 items?
			</h2>
			<ul className='ml-8'>
				{data?.map((todos: Todo[]) =>
					todos.map((todo: Todo, index: number) => (
						<li key={index} className='list-disc'>
							<p
								className={`text-base ${
									todo.completed
										? 'text-gray-500'
										: 'text-red-500 line-through'
								}`}
							>
								{todo.title}
							</p>
						</li>
					))
				)}
			</ul>
			{isValidating ? (
				<p className='text-base italic'>Loading...</p>
			) : size === MAX_PAGE ? (
				<p className='text-base font-bold'>You reached the end :)</p>
			) : (
				<button
					onClick={handleClick}
					className='text-base bg-emerald-500 mt-4 py-2 px-5 rounded-lg hover:bg-emerald-600'
				>
					Load More
				</button>
			)}
		</div>
	);
};

export default Todos;
