import { fireEvent, render } from '@testing-library/react';
import Counter from '../components/Counter';

describe('<Counter /> component', () => {
	test('if the counter displays the initial count=3', () => {
		const { getByTestId } = render(<Counter initialCount={3} />);
		const countValue: HTMLSpanElement = getByTestId('count');

		expect(countValue).toHaveTextContent('3');
	});

	test('if the count increments by 1 when the increment button is clicked', () => {
		const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
		const incrementButton = getByRole('button', {
			name: 'Increment',
		}) as HTMLButtonElement;

		const countValue1: HTMLSpanElement = getByTestId('count');
		expect(countValue1).toHaveTextContent('0');

		fireEvent.click(incrementButton);

		const countValue2: HTMLSpanElement = getByTestId('count');
		expect(countValue2).toHaveTextContent('1');
	});

	test('if the count decrements by 1 when the decrement button is clicked', () => {
		const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
		const decrementButton = getByRole('button', {
			name: 'Decrement',
		}) as HTMLButtonElement;

		const countValue1: HTMLSpanElement = getByTestId('count');
		expect(countValue1).toHaveTextContent('0');

		fireEvent.click(decrementButton);

		const countValue2: HTMLSpanElement = getByTestId('count');
		expect(countValue2).toHaveTextContent('-1');
	});

	test('if the count resets to 0 when the reset button is clicked', () => {
		const { getByTestId, getByRole } = render(<Counter initialCount={3} />);
		const resetButton = getByRole('button', {
			name: 'Reset',
		}) as HTMLButtonElement;

		const countValue1: HTMLSpanElement = getByTestId('count');
		expect(countValue1).toHaveTextContent('3');

		fireEvent.click(resetButton);

		const countValue2: HTMLSpanElement = getByTestId('count');
		expect(countValue2).toHaveTextContent('0');
	});
});
