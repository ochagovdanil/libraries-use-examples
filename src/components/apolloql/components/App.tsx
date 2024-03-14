import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import CharactersList from './CharactersList';
import Search from './Search';
import Mutation from './Mutation';

const client = new ApolloClient({
	uri: 'https://rickandmortyapi.com/graphql',
	cache: new InMemoryCache(),
});

export default function App() {
	return (
		<ApolloProvider client={client}>
			<div className='container'>
				<CharactersList />
				<Search />
				{/* API doesn't support it ;( */}
				{/* <Mutation /> */}
			</div>
		</ApolloProvider>
	);
}
