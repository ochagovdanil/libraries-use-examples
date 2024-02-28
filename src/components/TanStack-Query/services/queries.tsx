import {
	keepPreviousData,
	useInfiniteQuery,
	useQueries,
	useQuery,
} from '@tanstack/react-query';
import { getAlbums, getAllTodos, getComments, getTodo } from './api';

export function useTodosByIds(ids: (number | undefined)[] | undefined) {
	return useQueries({
		queries: (ids ?? []).map(id => {
			return {
				queryKey: [`todos/${id}`],
				queryFn: () => getTodo(id!),
			};
		}),
	});
}

export function useAllTodos() {
	return useQuery({
		queryKey: ['todos'],
		queryFn: getAllTodos,
	});
}

export function useAlbums(pageIndex: number) {
	return useQuery({
		queryKey: ['albums', { pageIndex }],
		queryFn: () => getAlbums(pageIndex),
		placeholderData: keepPreviousData, // keep the previous (current) page loaded while fetching the next one
	});
}

export function useComments() {
	return useInfiniteQuery({
		queryKey: ['comments'],
		queryFn: getComments,
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages, lastPageParam) => {
			if (lastPage.length > 0) return allPages.length + 1; // didn't reach the end yet

			return undefined;
		},
		getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
			if (firstPageParam <= 1) return undefined; // reached the start

			return firstPageParam - 1;
		},
	});
}
