import { memo } from 'react';
import { useCharacter } from '../hooks/useCharacter';
import { Episode } from '../types/episode';

type CharacterType = {
	id: number;
};

function CharacterDescription({ id }: CharacterType) {
	const { loading, error, data } = useCharacter(id);

	if (loading)
		return (
			<p className='italic text-base text-gray-700'>
				Loading character description...
			</p>
		);

	if (error)
		return (
			<p className='text-base text-red-700 font-bold'>
				Error occurred while loading character description!
			</p>
		);

	return (
		<div>
			<h1 className='font-bold text-3xl text-gray-700 mt-4'>
				Current character:
			</h1>
			<div className='flex flex-wrap justify-start gap-x-20'>
				<div>
					<p className='text-gray-500 text-xl my-2'>
						{data.character.name}
					</p>
					<img
						src={data.character.image}
						className='rounded-3xl shadow-lg'
					/>
				</div>
				<div>
					<p className='text-lg text-gray-500 mb-4'>
						Episodes that character was in:
					</p>
					<ul className='overflow-y-auto h-72'>
						{data.character.episode.map(
							(episode: Episode, index: number) => {
								return (
									<li key={index}>
										<p className='text-sm text-gray-700'>
											- {episode.name} [{episode.air_date}
											]
										</p>
									</li>
								);
							}
						)}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default memo(CharacterDescription);
