import { observer } from 'mobx-react-lite';
import { useStores } from '../app/RootStoreContext';

function PostFetch() {
	const { postStore } = useStores();

	function handleClick() {
		postStore.getPostsAction();
	}

	return (
		<button
			className='text-white bg-green-600 rounded-lg py-1 px-3 cursor-pointer my-4'
			onClick={handleClick}
		>
			Fetch posts
		</button>
	);
}

export default observer(PostFetch);
