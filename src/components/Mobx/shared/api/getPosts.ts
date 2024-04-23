import { PostItem } from '@components/Mobx/entities/PostItem';
import axios from 'axios';

export const getPosts = async () =>
	(await axios.get<PostItem[]>('https://jsonplaceholder.typicode.com/posts'))
		.data;
