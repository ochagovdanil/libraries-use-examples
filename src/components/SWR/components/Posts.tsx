import { memo } from 'react';
import { usePosts } from '../services/queries';
import { Post } from '../types/post';

type PostsType = {
	pageIndex: number;
};

const Posts = memo(({ pageIndex }: PostsType) => {
	const { data, isLoading, error } = usePosts(pageIndex);

	if (isLoading) return <p className='text-base italic'>Loading...</p>;

	if (error)
		return (
			<p className='text-base text-red-700'>Error occurred: {error}</p>
		);

	return (
		<ul>
			{data?.map((post: Post, index: number) => (
				<li
					key={index}
					className='max-w-[50rem] my-4 p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg'
				>
					<p className='text-lg text-gray-800'>{post.title}</p>
					<p className='text-sm text-gray-500'>{post.body}</p>
				</li>
			))}
		</ul>
	);
});

export default Posts;
