import { memo, useState } from 'react';

type CounterType = {
	initialCount: number;
};

function Counter({ initialCount }: CounterType) {
	const [count, setCount] = useState<number>(initialCount);

	function handleIncrement() {
		setCount(count + 1);
	}

	function handleDecrement() {
		setCount(count - 1);
	}

	function handleReset() {
		setCount(0);
	}

	return (
		<div>
			<h2 className='font-bold text-3xl text-gray-600 my-4'>
				Counter: <span data-testid='count'>{count}</span>
			</h2>
			<div className='space-y-2'>
				<button
					onClick={handleIncrement}
					className='block text-base cursor-pointer bg-blue-500 py-2 px-4 rounded-lg text-white hover:bg-blue-600'
				>
					Increment
				</button>
				<button
					onClick={handleDecrement}
					className='block text-base cursor-pointer bg-blue-500 py-2 px-4 rounded-lg text-white hover:bg-blue-600'
				>
					Decrement
				</button>
				<button
					onClick={handleReset}
					className='block text-base cursor-pointer bg-blue-500 py-2 px-4 rounded-lg text-white hover:bg-blue-600'
				>
					Reset
				</button>
			</div>
		</div>
	);
}

export default memo(Counter);
