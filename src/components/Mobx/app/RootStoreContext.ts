import { createContext, useContext } from 'react';
import RootStore from './RootStore';

export const RootStoreContext = createContext<RootStore | null>(null);

export const useStores = () => {
	const context = useContext(RootStoreContext);

	if (context === null)
		throw new Error(
			'Seems like you did not wrap your component in the context provider!'
		);

	return context;
};
