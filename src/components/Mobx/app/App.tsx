import Main from '../pages/Main';
import RootStore from './RootStore';
import { RootStoreContext } from './RootStoreContext';

export default function App() {
	return (
		<RootStoreContext.Provider value={new RootStore()}>
			<div className='container'>
				<Main />
			</div>
		</RootStoreContext.Provider>
	);
}
