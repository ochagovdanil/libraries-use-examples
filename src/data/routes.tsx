import { lazy } from 'react';

const NotFound = lazy(() => import('@components/NotFound'));
const Main = lazy(() => import('@components/Main'));
const REACT_HOOK_FORM_App = lazy(
	() => import('@components/React-Hook-Form/components/App')
);
const SWR_App = lazy(() => import('@components/SWR/components/App'));
const TANSTACK_QUERY_App = lazy(
	() => import('@components/TanStack-Query/components/App')
);
const APOLLOQL_APP = lazy(() => import('@components/apolloql/components/App'));
const TEST_APP = lazy(() => import('@components/Jest/components/App'));
const MOBX_APP = lazy(() => import('@components/Mobx/app/App'));

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
		path: '/react-hook-form',
		component: () => <REACT_HOOK_FORM_App />,
	},
	{
		path: '/swr',
		component: () => <SWR_App />,
	},
	{
		path: '/tanstack-query',
		component: () => <TANSTACK_QUERY_App />,
	},
	{
		path: '/apolloql',
		component: () => <APOLLOQL_APP />,
	},
	{
		path: '/testing',
		component: () => <TEST_APP />,
	},
	{
		path: '/mobx',
		component: () => <MOBX_APP />,
	},
];

export { routes };
