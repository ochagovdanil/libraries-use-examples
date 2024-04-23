import { observer } from 'mobx-react-lite';
import CounterImpl from '../features/CounterImpl';
import { useStores } from '../app/RootStoreContext';

function Counter() {
	const { counterStore } = useStores();

	return (
		<div>
			<h1 className='font-bold text-2xl text-gray-800 my-4'>
				Counter Implementation using MobX
			</h1>
			<p className='my-4'>Current count: {counterStore.count}</p>
			<p className='my-4'>Total count: {counterStore.total}</p>
			<CounterImpl />
		</div>
	);
}

export default observer(Counter);
