import { Link } from 'react-router-dom';

const Main = () => {
	return (
		<div className='w-screen h-screen bg-textured flex flex-col justify-center content-center items-center'>
			<h1 className='text-center font-semibold text-5xl'>
				Libraries Use Examples
			</h1>
			<p className='max-w-[60rem] mt-4 text-base text-gray-600 text-center'>
				This repo illustrates some libraries in action that I've come
				across while coding on the Internet. All snippets are
				represented in the project that was written via Vite + ReactJS +
				TypeScript + TailwindCSS.
			</p>
			<div className='flex flex-wrap gap-4 justify-center my-4'>
				<Link to='/react-hook-form' className='button-blue'>
					React Hook Form (+Zod)
				</Link>
				<Link to='/swr' className='button-blue'>
					SWR
				</Link>
				<Link to='/tanstack-query' className='button-blue'>
					TanStack Query (React Query)
				</Link>
				<Link to='/apolloql' className='button-blue'>
					Apollo GraphQL
				</Link>
			</div>
		</div>
	);
};

export default Main;
