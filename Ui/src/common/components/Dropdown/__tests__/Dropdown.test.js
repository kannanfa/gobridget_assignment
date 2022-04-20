import React from 'react'
import { render, screen} from '@testing-library/react'
import Dropdown from '../Dropdown'
import dropdowninfo from 'store/__tests__/dropdown.json'

describe('Dropdown Component', () => {
	
	it('should render Dropdown', () => {
		render(<Dropdown {...dropdowninfo}/>);
        expect(screen.getByTestId(`dropdown-list`)).toBeInTheDocument();
        expect(screen.getByTestId(`dropdown-link`)).toBeInTheDocument();
        expect(screen.getByTestId(`DropdownListItem-account-setting`)).toBeInTheDocument();
        expect(screen.getByTestId(`DropdownListItem-user-management`)).toBeInTheDocument();
        expect(screen.getByTestId(`DropdownListItem-Language`)).toBeInTheDocument();        
    });
});
