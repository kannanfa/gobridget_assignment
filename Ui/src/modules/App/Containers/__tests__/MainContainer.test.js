import React from 'react'
import { render, screen} from '@testing-library/react'
import MainContainer from '../MainContainer'

describe('MainContainer Component', () => {
	
	it('should render main container', () => {
		render(<MainContainer />);
        expect(screen.getByTestId(`main-container`)).toBeInTheDocument();
	});

});
