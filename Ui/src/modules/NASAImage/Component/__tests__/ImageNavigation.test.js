import React from 'react'
import { render, screen} from '@testing-library/react'
import ImageNavigation from '../ImageNavigation'
import { UserContextProvider } from 'common/context'
import { Provider } from 'react-redux'
import { configureStore } from "store/store";
import { fromJS } from 'immutable'
import data from "store/__tests__/mockstore.json";

describe('ImageNavigation Component', () => {
	
	it('should render image Navigation', () => {
        const userInfo = {loginId:"kannan", name:"kannan"};
        
      
		render(<ImageNavigation />, {
            wrapper: ({ children }) => (
                <UserContextProvider value={userInfo}>
                    <Provider store={configureStore(fromJS(data))}>{children}</Provider>
                </UserContextProvider>
            ),
          });
        expect(screen.getByTestId(`image-Navigation-prev`)).toBeInTheDocument();
        expect(screen.getByTestId(`image-Navigation-currentpage`)).toBeInTheDocument();
        expect(screen.getByTestId(`image-Navigation-next`)).toBeInTheDocument();
        
	});

});
