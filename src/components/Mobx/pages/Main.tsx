import { spy } from 'mobx';
import Counter from '../widget/Counter';
import PostList from '../widget/PostList';
import TodoList from '../widget/TodoList';

spy(event => {
	if (event.type === 'action') console.log(event);
});

export default function Main() {
	return (
		<div>
			<Counter />
			<TodoList />
			<PostList />
		</div>
	);
}
