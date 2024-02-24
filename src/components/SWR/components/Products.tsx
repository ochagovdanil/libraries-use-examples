import { ChangeEvent, useCallback, useState } from 'react';
import { useProducts } from '../services/queries';
import { Product } from '../types/product';
import { axiosInstance } from '../services/fetcher';
import { useCreateProduct } from '../services/mutations';

const Products = () => {
	const [inputValue, setInputValue] = useState<string>('');

	const { data, isLoading, mutate, isValidating } = useProducts();
	const { trigger, isMutating } = useCreateProduct();

	const handleInputValue = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setInputValue(e.target.value);
		},
		[inputValue]
	);

	const handleCreateProduct = async () => {
		// ---- before useSWRMutation() hook ---
		// await axiosInstance.post('/products', { title: inputValue });
		// mutate();
		// setInputValue('');

		// ---- after useSWRMutation() hook ---
		trigger(
			{ title: inputValue },
			{
				optimisticData: data && [
					...data,
					{ title: `Inserting a new product...` },
				],
				rollbackOnError: true,
			}
		);
		setInputValue('');
	};

	return (
		<div className='w-max p-4 border-b-[0.0625rem] border-b-gray-300'>
			<h2 className='font-bold text-2xl text-gray-700'>Products:</h2>
			{!data ? (
				<p className='text-base italic'>No products loaded!</p>
			) : isLoading ? (
				<p className='text-base italic'>Loading products...</p>
			) : (
				<ul>
					{data.map((product: Product, index: number) => (
						<li key={index} className='list-disc ml-7'>
							<p className='text-base text-gray-600'>
								{product.title}
							</p>
						</li>
					))}
				</ul>
			)}
			<div className='mt-2'>
				<input
					type='text'
					placeholder='Enter a product name...'
					value={inputValue}
					onChange={handleInputValue}
					disabled={isMutating || isValidating}
					className='text-base text-gray-900 py-1 px-2 border-b-blue-500 border-b-[0.125rem] outline-none bg-transparent caret-yellow-500 disabled:bg-gray-100'
				/>
				<button
					onClick={handleCreateProduct}
					disabled={isMutating || isValidating}
					className='ml-4 bg-blue-400 text-base text-white py-2 px-4 rounded-lg hover:bg-blue-500 disabled:bg-gray-500'
				>
					{isMutating || isValidating
						? 'Updating the list...'
						: 'Create Product'}
				</button>
			</div>
		</div>
	);
};

export default Products;
