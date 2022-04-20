import React from 'react'
import { render, screen} from '@testing-library/react'
import Navbar from '../Navbar'

describe('Navbar Component', () => {
	
	it('should render Navbar', () => {
		render(<Navbar />);
        expect(screen.getByTestId(`navbar`)).toBeInTheDocument();
        expect(screen.getByTestId(`navbar-button`)).toBeInTheDocument();
        expect(screen.getByTestId(`navbar-list`)).toBeInTheDocument();
        expect(screen.getByTestId(`navbar-brand`)).toBeInTheDocument();
        
    });
});
