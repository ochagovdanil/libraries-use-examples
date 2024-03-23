import { fireEvent, render, screen } from '@testing-library/react';
import Login from '../components/Login';
import axios from 'axios';

jest.mock('axios');

const axiosMocked = axios as jest.Mocked<typeof axios>;

beforeEach(() => {
	render(<Login />);
});

describe('<Login /> component: render test', () => {
	test('if the username input should be rendered', () => {
		const userInputEl: HTMLInputElement =
			screen.getByPlaceholderText(/username/i);
		expect(userInputEl).toBeInTheDocument();
	});

	test('if the password input should be rendered', () => {
		const passwordInputEl: HTMLInputElement =
			screen.getByPlaceholderText(/password/i);
		expect(passwordInputEl).toBeInTheDocument();
	});

	test('if the button element should be rendered', () => {
		const buttonInputEl: HTMLInputElement = screen.getByRole('button');
		expect(buttonInputEl).toBeInTheDocument();
	});
});

describe('<Login /> component: fields test', () => {
	test('if the username input should be empty', () => {
		const userInputEl: HTMLInputElement =
			screen.getByPlaceholderText(/username/i);
		expect(userInputEl).toHaveValue('');
	});

	test('if the password input should be empty', () => {
		const passwordInputEl: HTMLInputElement =
			screen.getByPlaceholderText(/password/i);
		expect(passwordInputEl).toHaveValue('');
	});

	test('if the username input should change to "username demo"', () => {
		const userInputEl: HTMLInputElement =
			screen.getByPlaceholderText(/username/i);
		const testValue: string = 'username demo';

		fireEvent.change(userInputEl, {
			target: {
				value: testValue,
			},
		});
		expect(userInputEl).toHaveValue(testValue);
	});

	test('if the password input should change to "password demo"', () => {
		const passwordInputEl: HTMLInputElement =
			screen.getByPlaceholderText(/password/i);
		const testValue: string = 'password demo';

		fireEvent.change(passwordInputEl, {
			target: {
				value: testValue,
			},
		});
		expect(passwordInputEl).toHaveValue(testValue);
	});
});

describe('<Login /> component: button functionality', () => {
	test('if the button is disabled when the input is empty', () => {
		const buttonInputEl: HTMLInputElement = screen.getByRole('button');
		expect(buttonInputEl).toBeDisabled();
	});

	test('if the button is not disabled when the input exists', () => {
		const buttonInputEl: HTMLInputElement = screen.getByRole('button');
		const userInputEl: HTMLInputElement =
			screen.getByPlaceholderText(/username/i);
		const passwordInputEl: HTMLInputElement =
			screen.getByPlaceholderText(/password/i);

		const testValue: string = 'test value';
		fireEvent.change(userInputEl, {
			target: {
				value: testValue,
			},
		});
		fireEvent.change(passwordInputEl, {
			target: {
				value: testValue,
			},
		});

		expect(buttonInputEl).not.toBeDisabled();
	});
});

describe('<Login /> component: error message test', () => {
	it('should hide the error message at the start', () => {
		const errorMessageEl: HTMLParagraphElement =
			screen.getByTestId('error');
		expect(errorMessageEl).not.toBeVisible();
	});

	test('if the error message pops up after the invalid form submission', async () => {
		axiosMocked.get.mockImplementation(() => Promise.reject());

		const userInputEl: HTMLInputElement =
			screen.getByPlaceholderText(/username/i);
		const passwordInputEl: HTMLInputElement =
			screen.getByPlaceholderText(/password/i);
		const buttonInputEl: HTMLInputElement = screen.getByRole('button');

		const testValue: string = 'test value';

		fireEvent.change(userInputEl, {
			target: {
				value: testValue,
			},
		});
		fireEvent.change(passwordInputEl, {
			target: {
				value: testValue,
			},
		});

		fireEvent.click(buttonInputEl);

		const errorMessageEl: HTMLParagraphElement = await screen.findByText(
			'Something went wrong!'
		);
		expect(errorMessageEl).toBeInTheDocument();
	});
});

describe('<Login /> component: user email address text test:', () => {
	test('if the user email address is "empty yet!"', () => {
		const emailEl: HTMLSpanElement = screen.getByTestId('email');
		expect(emailEl).toHaveTextContent('empty yet!');
	});

	test('if the user email is fetched after the valid form submission', async () => {
		axiosMocked.get.mockImplementation(() =>
			Promise.resolve({
				data: {
					id: 1,
					email: 'johndoe@gmail.com',
				},
			})
		);

		const userInputEl: HTMLInputElement =
			screen.getByPlaceholderText(/username/i);
		const passwordInputEl: HTMLInputElement =
			screen.getByPlaceholderText(/password/i);
		const buttonInputEl: HTMLInputElement = screen.getByRole('button');

		const testValue: string = 'test value';
		fireEvent.change(userInputEl, {
			target: {
				value: testValue,
			},
		});
		fireEvent.change(passwordInputEl, {
			target: {
				value: testValue,
			},
		});

		fireEvent.click(buttonInputEl);

		const emailEl: HTMLSpanElement = await screen.findByText(
			'johndoe@gmail.com'
		);
		expect(emailEl).toBeInTheDocument();
	});
});
