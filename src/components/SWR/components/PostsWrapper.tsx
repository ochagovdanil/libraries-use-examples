import { useCallback, useState } from 'react';
import Posts from './Posts';

const MIN_PAGE: number = 1;
const MAX_PAGE: number = 25;

const PostsWrapper = () => {
	const [pageIndex, setPageIndex] = useState<number>(1);

	const handleNextClick = useCallback(() => {
		if (pageIndex === MAX_PAGE) return;

		setPageIndex(pageIndex + 1);
	}, [pageIndex]);

	const handlePrevClick = useCallback(() => {
		if (pageIndex === MIN_PAGE) return;

		setPageIndex(pageIndex - 1);
	}, [pageIndex]);

	return (
		<div className='w-max pb-4 border-b-[0.0625rem] border-gray-300'>
			<h2 className='mt-4 font-bold text-2xl text-gray-800'>
				Some Posts:
			</h2>
			<Posts pageIndex={pageIndex} />
			<div style={{ display: 'none' }}>
				<Posts pageIndex={pageIndex + 1} />
			</div>
			<p className='text-sm italic mb-2'>{pageIndex} of 25 page(s)</p>
			<div className='divide-x-2 divide-zinc-700'>
				<button
					onClick={handlePrevClick}
					className='text-base text-white bg-zinc-600 py-2 px-4 rounded-s-lg hover:bg-zinc-700'
				>
					Previous
				</button>
				<button
					onClick={handleNextClick}
					className='text-base text-white bg-zinc-600 py-2 px-4 rounded-e-lg hover:bg-zinc-700'
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default PostsWrapper;
