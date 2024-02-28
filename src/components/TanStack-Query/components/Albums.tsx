import { useCallback, useState } from 'react';
import { useAlbums } from '../services/queries';
import { Album } from '../types/album';

const MIN_PAGE: number = 1;
const MAX_PAGE: number = 10;

export default function Albums() {
	const [pageIndex, setPageIndex] = useState<number>(MIN_PAGE);
	const queryAlbums = useAlbums(pageIndex);

	const handlePreviousClick = useCallback(() => {
		if (pageIndex !== MIN_PAGE) setPageIndex(pageIndex - 1);
	}, [pageIndex]);

	const handleNextClick = useCallback(() => {
		if (pageIndex !== MAX_PAGE) setPageIndex(pageIndex + 1);
	}, [pageIndex]);

	if (queryAlbums.isPending) return <p className='italic'>Loading...</p>;

	if (queryAlbums.isError)
		return <p className='font-bold text-red-700'>Error occurred!</p>;

	return (
		<div className='mt-10'>
			<h2 className='font-bold text-3xl text-gray-700'>
				Do you want to read something?
			</h2>
			<ul className='mt-4'>
				{queryAlbums.data.map((album: Album, index: number) => (
					<li key={index} className='text-gray-500'>
						- {album.title}
					</li>
				))}
			</ul>
			{queryAlbums.isFetching ? (
				<p className='italic my-2'>Loading page...</p>
			) : (
				<p className='italic my-2'>
					{pageIndex} of {MAX_PAGE} page(s)
				</p>
			)}
			<div className='divide-x-2 divide-gray-600'>
				<button
					onClick={handlePreviousClick}
					disabled={queryAlbums.isFetching}
					className='text-white py-2 px-4 rounded-s-lg bg-blue-500 cursor-pointer hover:bg-blue-600 disabled:bg-gray-600'
				>
					Previous
				</button>
				<button
					onClick={handleNextClick}
					disabled={queryAlbums.isFetching}
					className='text-white py-2 px-4 rounded-e-lg bg-blue-500 cursor-pointer hover:bg-blue-600 disabled:bg-gray-600'
				>
					Next
				</button>
			</div>
		</div>
	);
}
