import { render } from '@testing-library/react';
import App from '../components/App';

describe('<App /> component:', () => {
	it('should render <Counter /> and <Login /> components:', () => {
		const { getByTestId } = render(<App />);

		expect(getByTestId('count')).toBeInTheDocument();
		expect(getByTestId('email')).toBeInTheDocument();
	});
});
