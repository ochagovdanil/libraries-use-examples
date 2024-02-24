import React, { memo } from 'react';
import { SWRConfig } from 'swr';
import fetcher from '../services/fetcher';

type ProvidersType = {
	children: React.ReactNode;
};

const Providers = memo(({ children }: ProvidersType) => {
	return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
});

export default Providers;
