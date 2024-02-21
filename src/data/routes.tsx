import { lazy } from 'react';

const NotFound = lazy(() => import('@components/NotFound'));
const Main = lazy(() => import('@components/Main'));
const SWR_App = lazy(() => import('@components/SWR/App'));
const TANSTACK_QUERY_App = lazy(() => import('@components/TanStack-Query/App'));

type RouteType = {
	path: string;
	component: () => React.ReactElement;
};

const routes: RouteType[] = [
	{
		path: '*',
		component: () => <NotFound />,
	},
	{
		path: '/',
		component: () => <Main />,
	},
	{
		path: '/swr',
		component: () => <SWR_App />,
	},
	{
		path: '/tanstack-query',
		component: () => <TANSTACK_QUERY_App />,
	},
];

export { routes };
