import { gql, useQuery } from '@apollo/client';

const GET_CHARACTERS = gql`
	{
		characters {
			results {
				id
				name
				image
			}
		}
	}
`;

export const useCharacters = () => {
	const { loading, error, data } = useQuery(GET_CHARACTERS);

	return {
		loading,
		error,
		data,
	};
};
