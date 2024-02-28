import axios from 'axios';
import { TodoLocal, TodoRemote } from '../types/todo';
import { Album } from '../types/album';
import { Comment } from '../types/comment';

const axiosInstanceLocal = axios.create({
	baseURL: 'http://localhost:3000',
});

const axiosInstanceRemote = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com', // sometimes local fake API misses some important features. thus, we use the remote one
});

export const getAllTodos = async () => {
	return (await axiosInstanceLocal.get<TodoLocal[]>('/todos')).data;
};

export const getTodo = async (id: number) => {
	return (await axiosInstanceRemote.get<TodoRemote>(`todos/${id}`)).data;
};

export const createTodo = async (data: TodoLocal) => {
	return await axiosInstanceLocal.post('todos', data);
};

export const getAlbums = async (pageIndex: number) => {
	return (
		await axiosInstanceRemote.get<Album[]>(
			`/albums?_page=${pageIndex}&_limit=10`
		)
	).data;
};

export const getComments = async ({ pageParam }: { pageParam: number }) => {
	return (
		await axiosInstanceRemote.get<Comment[]>(
			`/comments?_page=${pageParam}&_limit=100`
		)
	).data;
};
