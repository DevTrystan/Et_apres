
import { render, screen, cleanup } from '@testing-library/react';
import { Button } from '../../../components/ui';

describe('Button Component', () => {
	let container: HTMLElement;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(cleanup);

	test('doit fournir un rendu', () => {
		render(<Button>button</Button>);
		const button = screen.getByText('button');
		expect(button?.innerHTML).toBeInTheDocument();
	});
});

export {};
