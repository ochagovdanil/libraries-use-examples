import useSWR from 'swr';
import { Cart } from '../types/cart';
import { User } from '../types/user';
import { Product } from '../types/product';
import { logger } from '../utils/logger';
import { Post } from '../types/post';
import remoteFetcher from './jsonplaceholderfetcher';
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite';
import { Todo } from '../types/todo';

export function useUser() {
	return useSWR<User>('/user');
}

export function useCart() {
	const { data } = useUser();

	return useSWR<Cart>(data ? '/cart' : null);
}
export function useProducts() {
	return useSWR<Product[]>('/products', {
		use: [logger],
	});
}

export function usePosts(pageIndex: number) {
	return useSWR<Post[]>(`/posts?_limit=4&_page=${pageIndex}`, remoteFetcher); // override fetcher here (used to call the remote fake API instead of local one)
}

export function useTodos() {
	const getKey: SWRInfiniteKeyLoader = (
		pageIndex: number,
		previousPageData: Todo[]
	) => {
		if (previousPageData && !previousPageData.length) return null; // reached the end

		return `/todos?_page=${pageIndex + 1}&_limit=20`; // pageIndex + 1 because API's pages start with 1, not 0
	};

	return useSWRInfinite<Todo[]>(getKey, remoteFetcher); // override fetcher here (used to call the remote fake API instead of local one)
}
