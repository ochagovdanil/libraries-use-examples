import { TodoItem } from '@components/Mobx/entities/TodoItem';
import { makeAutoObservable } from 'mobx';

class Todo {
	todos: TodoItem[] = [
		{
			id: 1,
			title: 'Do shopping next weekend',
			completed: false,
		},
		{
			id: 2,
			title: 'Clean the car',
			completed: true,
		},
		{
			id: 3,
			title: 'Push this repo on github',
			completed: false,
		},
	];

	constructor() {
		makeAutoObservable(this);
	}

	addTodo(todo: TodoItem) {
		this.todos.push(todo);
	}

	removeTodo(id: number) {
		this.todos = this.todos.filter(
			(todoItem: TodoItem) => todoItem.id !== id
		);
	}

	completeTodo(todoItem: TodoItem) {
		todoItem.completed = !todoItem.completed;
	}
}

export default new Todo();
