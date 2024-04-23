import { observer } from 'mobx-react-lite';
import { PostItem } from '../entities/PostItem';
import PostFetch from '../features/PostFetch';
import { useStores } from '../app/RootStoreContext';

function PostList() {
	const { postStore } = useStores();

	return (
		<div>
			<h2 className='text-xl text-gray-700 font-bold mt-6'>Posts:</h2>
			<PostFetch />
			{postStore.posts?.state === 'pending' && (
				<p className='italic'>Posts are loading...</p>
			)}
			{postStore.posts?.state === 'rejected' && (
				<p className='italic'>Error occurred!</p>
			)}
			{postStore.posts?.state === 'fulfilled' && (
				<ul>
					{postStore.posts.value.map(
						(post: PostItem, index: number) => {
							return (
								<li key={index} className='list-disc'>
									{post.title}
								</li>
							);
						}
					)}
				</ul>
			)}
		</div>
	);
}

export default observer(PostList);
