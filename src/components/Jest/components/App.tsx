import Counter from './Counter';
import Login from './Login';

export default function App() {
	return (
		<div className='container'>
			<Counter initialCount={0} />
			<Login />
		</div>
	);
}
