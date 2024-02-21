import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Loader from '@components/Loader';
import '@styles/index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from '@data/routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				{routes.map(({ path, component }) => (
					<Route
						key={path}
						path={path}
						element={
							<Suspense fallback={<Loader />}>
								{component()}
							</Suspense>
						}
					/>
				))}
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
