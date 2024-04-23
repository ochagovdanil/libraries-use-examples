import { memo } from 'react';
import { TodoItem } from '../entities/TodoItem';
import TodoRemove from '../features/TodoRemove';
import TodoCompleted from '../features/TodoCompleted';

interface TodoCardProps {
	todo: TodoItem;
}

function TodoCard({ todo }: TodoCardProps) {
	return (
		<li>
			<TodoCompleted todoItem={todo} />
			<span>{todo.title}</span>
			<TodoRemove id={todo.id} />
		</li>
	);
}

export default memo(TodoCard);
