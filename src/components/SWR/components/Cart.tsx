import { useCart, useUser } from '../services/queries';

const Cart = () => {
	const userQuery = useUser();
	const cartQuery = useCart();

	return (
		<div className='border-b-[0.0625rem] border-b-gray-300 w-max p-4'>
			<h1 className='font-bold text-3xl mt-4'>
				{userQuery.isLoading ? (
					'Loading a user...'
				) : (
					<span>
						Username: <mark>{userQuery.data?.userName}</mark>
					</span>
				)}
			</h1>
			<p className='text-base text-gray-700'>
				Total cart cost:{' '}
				{cartQuery.data
					? cartQuery.data.totalCost
					: cartQuery.isLoading
					? 'calculating...'
					: 'NO USER FOUND!'}
			</p>
		</div>
	);
};

export default Cart;
