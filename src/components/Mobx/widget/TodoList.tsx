import { observer } from 'mobx-react-lite';
import { TodoItem } from '../entities/TodoItem';
import TodoCard from './TodoCard';
import { useStores } from '../app/RootStoreContext';

function TodoList() {
	const { todoStore } = useStores();

	return (
		<div>
			<h1 className='font-bold text-xl text-gray-600 mt-10 mb-4'>
				Simple ToDo list via MobX
			</h1>
			{todoStore.todos.map((item: TodoItem, index: number) => (
				<TodoCard todo={item} key={index} />
			))}
		</div>
	);
}

export default observer(TodoList);
