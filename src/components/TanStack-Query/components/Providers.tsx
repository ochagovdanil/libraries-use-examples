import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { memo } from 'react';

type ProvidersType = {
	children: React.ReactNode;
};

const queryClient: QueryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 5,
			retryDelay: 1_000,
		},
	},
});

function Providers({ children }: ProvidersType) {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
export default memo(Providers);
