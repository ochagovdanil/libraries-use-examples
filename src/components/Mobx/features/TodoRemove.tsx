import { observer } from 'mobx-react-lite';
import { useStores } from '../app/RootStoreContext';

interface TodoRemoveProps {
	id: number;
}

function TodoRemove({ id }: TodoRemoveProps) {
	const { todoStore } = useStores();

	function handleClick() {
		todoStore.removeTodo(id);
	}

	return (
		<button
			className='bg-red-600 text-white rounded-lg py-1 px-3 cursor-pointer ml-4'
			onClick={handleClick}
		>
			Remove
		</button>
	);
}

export default observer(TodoRemove);
