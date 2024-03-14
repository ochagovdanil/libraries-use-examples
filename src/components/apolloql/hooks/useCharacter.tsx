import { gql, useQuery } from '@apollo/client';

const GET_CHARACTER = gql`
	query GetCharacter($id: ID!) {
		character(id: $id) {
			id
			name
			image
			episode {
				id
				name
				air_date
			}
		}
	}
`;

export const useCharacter = (id: number) => {
	const { data, error, loading } = useQuery(GET_CHARACTER, {
		variables: {
			id,
		},
	});

	return {
		data,
		error,
		loading,
	};
};
