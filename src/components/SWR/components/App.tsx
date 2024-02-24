import Cart from './Cart';
import PostsWrapper from './PostsWrapper';
import Products from './Products';
import Providers from './Providers';
import Todos from './Todos';

const App = () => {
	return (
		<div className='container'>
			<Providers>
				<Cart />
				<Products />
				<PostsWrapper />
				<Todos />
			</Providers>
		</div>
	);
};

export default App;
