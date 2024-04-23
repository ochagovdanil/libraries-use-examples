import { useStores } from '../app/RootStoreContext';

export default function CounterImpl() {
	const { counterStore } = useStores();

	function handleIncrement() {
		counterStore.increment();
	}

	function handleDecrement() {
		counterStore.decrement();
	}

	return (
		<div>
			<button
				className='text-gray-700 bg-yellow-600 rounded-full py-2 px-4 m-2 curs'
				onClick={handleIncrement}
			>
				+
			</button>
			<button
				className='text-gray-700 bg-yellow-600 rounded-full py-2 px-4 m-2 curs'
				onClick={handleDecrement}
			>
				-
			</button>
		</div>
	);
}
