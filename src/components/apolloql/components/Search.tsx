import { gql, useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import { Character } from '../types/character';

const GET_CHARACTER_LOCATIONS = gql`
	query GetCharacterLocations($name: String!) {
		characters(filter: { name: $name }) {
			results {
				location {
					name
				}
			}
		}
	}
`;

export default function Search() {
	const [name, setName] = useState<string>('');

	const [getLocations, { loading, error, data }] = useLazyQuery(
		GET_CHARACTER_LOCATIONS
	);

	return (
		<div>
			<h2 className='font-bold text-2xl text-gray-700 mt-14 mb-6'>
				What <mark>episodes</mark> the character was in?
			</h2>
			<div className='space-x-4 mt-4 mb-10'>
				<input
					type='search'
					value={name}
					onChange={e => setName(e.target.value)}
					className='outline-none bg-transparent border-b-2 border-b-blue-500 py-2 px-6 caret-yellow-600'
					placeholder='Search for a character...'
				/>
				<button
					onClick={() =>
						getLocations({
							variables: {
								name,
							},
						})
					}
					className='bg-blue-500 text-white py-1 px-4 rounded-md cursor-pointer hover:bg-blue-600'
				>
					Search
				</button>
			</div>
			{loading && (
				<p className='italic text-base text-gray-700'>
					Searching for "{name}"...
				</p>
			)}
			{error && (
				<p className='text-base text-red-700 font-bold'>
					Error occurred while searching for "{name}"!
				</p>
			)}
			{data && (
				<ul className='mb-10'>
					{data.characters.results.map(
						(character: Character, index: number) => {
							return (
								<li key={index}>
									<p className='text-base text-gray-600 italic'>
										- {character.location.name}
									</p>
								</li>
							);
						}
					)}
				</ul>
			)}
		</div>
	);
}
