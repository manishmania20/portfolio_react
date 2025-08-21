import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero Component', () => {
	it('renders the heading', () => {
		render(<Hero />);
		expect(screen.getByText('HI, I AM MANISH')).toBeInTheDocument();
	});

	it('renders the subheading', () => {
		render(<Hero />);
		expect(screen.getByText('A DevOps & Cloud Engineer')).toBeInTheDocument();
	});

	it('renders the download CV button', () => {
		render(<Hero />);
		expect(screen.getByRole('button', { name: /Download CV/i })).toBeInTheDocument();
	});
});
