import { Fragment } from 'react';
import { useComments } from '../services/queries';
import { Comment } from '../types/comment';

export default function Comments() {
	const queryComments = useComments();

	if (queryComments.isPending) return <p className='italic'>Loading...</p>;

	if (queryComments.isError)
		return <p className='font-bold text-red-700'>Error occurred!</p>;

	const handleLoadMoreClick = () => {
		queryComments.fetchNextPage();
	};

	return (
		<div className='mt-10 mb-20'>
			<h2 className='font-bold text-3xl text-gray-700'>
				Tired of <mark>infinite</mark> scrolls?
			</h2>
			<ul className='mt-4'>
				{queryComments.data.pages.map(
					(commentsGroup: Comment[], index: number) => (
						<Fragment key={index}>
							{commentsGroup.map(
								(comment: Comment, index: number) => (
									<li key={index} className='list-disc ml-8'>
										{comment.email}
									</li>
								)
							)}
						</Fragment>
					)
				)}
			</ul>
			{queryComments.isFetchingNextPage ? (
				<p className='italic mt-4'>Loading more...</p>
			) : queryComments.hasNextPage ? (
				<button
					onClick={handleLoadMoreClick}
					disabled={queryComments.isFetchingNextPage}
					className='text-gray-700 py-2 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-600 cursor-pointer mt-4'
				>
					Load More
				</button>
			) : (
				<p className='font-bold italic mt-4'>Your reached the end!</p>
			)}
		</div>
	);
}
