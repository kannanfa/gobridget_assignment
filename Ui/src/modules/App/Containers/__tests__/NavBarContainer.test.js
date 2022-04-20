import React from 'react'
import { render, screen} from '@testing-library/react'
import NavBarContainer from '../NavBarContainer'

describe('NavBarContainer Component', () => {
	
	it('should render navbar container', () => {
		render(<NavBarContainer />);
        expect(screen.getByTestId(`navbar-container`)).toBeInTheDocument();
        expect(screen.getByTestId(`dropdown-list`)).toBeInTheDocument();
        expect(screen.getByTestId(`dropdown-link`)).toBeInTheDocument();
        expect(screen.getByTestId(`DropdownListItem-account-setting`)).toBeInTheDocument();
        expect(screen.getByTestId(`DropdownListItem-user-management`)).toBeInTheDocument();
        expect(screen.getByTestId(`DropdownListItem-Language`)).toBeInTheDocument();   
	});

});
