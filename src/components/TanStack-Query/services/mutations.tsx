import {
	QueryClient,
	useMutation,
	useQueryClient,
} from '@tanstack/react-query';
import { TodoLocal } from '../types/todo';
import { createTodo } from './api';

export function useCreateTodo() {
	const queryClient: QueryClient = useQueryClient();

	return useMutation({
		mutationFn: (data: TodoLocal) => createTodo(data),
		onMutate: () => console.log('Mutating the todo list...'),
		onError: () => console.log('Error occurred during mutation!'),
		onSuccess: () => console.log('Successfully mutated!'),
		onSettled: async (_, error) => {
			console.log('Mutation settled!');

			if (error) console.log(error);
			else {
				// update the data on the screen
				await queryClient.invalidateQueries({
					queryKey: ['todos'],
				});
			}
		},
	});
}
