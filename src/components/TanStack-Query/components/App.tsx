import Albums from './Albums';
import Comments from './Comments';
import ComplexTodo from './ComplexTodo';
import Providers from './Providers';
import Todo from './Todo';

export default function App() {
	return (
		<div className='container'>
			<Providers>
				<Todo />
				<ComplexTodo />
				<Albums />
				<Comments />
			</Providers>
		</div>
	);
}
