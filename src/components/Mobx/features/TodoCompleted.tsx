import { observer } from 'mobx-react-lite';
import { TodoItem } from '../entities/TodoItem';
import { useStores } from '../app/RootStoreContext';

interface TodoCompletedProps {
	todoItem: TodoItem;
}

function TodoCompleted({ todoItem }: TodoCompletedProps) {
	const { todoStore } = useStores();

	return (
		<input
			type='checkbox'
			checked={todoItem.completed}
			className='mr-2'
			onChange={() => todoStore.completeTodo(todoItem)}
		/>
	);
}

export default observer(TodoCompleted);
