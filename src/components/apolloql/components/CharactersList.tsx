import { useState } from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { Character } from '../types/character';
import CharacterDescription from './CharacterDescription';

export default function CharactersList() {
	const [characterID, setCharacterID] = useState<number>(1);

	const { error, data, loading } = useCharacters();

	function handleClick(character: Character) {
		setCharacterID(character.id);
	}

	if (loading)
		return (
			<p className='italic text-base text-gray-700'>
				Loading all characters...
			</p>
		);

	if (error)
		return (
			<p className='text-base text-red-700 font-bold'>
				Error occurred while loading all characters!
			</p>
		);

	return (
		<div>
			<CharacterDescription id={characterID} />
			<h2 className='text-2xl text-gray-700 font-bold my-8'>
				All Rick and Morty characters:
			</h2>
			<ul className='flex flex-wrap justify-evenly gap-8'>
				{data.characters.results.map(
					(character: Character, index: number) => {
						return (
							<li
								key={index}
								className='flex flex-nowrap justify-around gap-x-4 items-center cursor-pointer'
								onClick={() => handleClick(character)}
							>
								<img
									src={character.image}
									className='rounded-full h-32 shadow-xl'
								/>
								<p className='text-lg text-gray-500 w-32'>
									{character.name}
								</p>
							</li>
						);
					}
				)}
			</ul>
		</div>
	);
}
