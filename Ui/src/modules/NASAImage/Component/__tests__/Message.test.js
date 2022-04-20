import React from 'react'
import { render, screen} from '@testing-library/react'
import { LoaderMessage, InfoMessage, ErrorMessage } from '../Message'
import { UserContextProvider } from 'common/context'
import { Provider } from 'react-redux'
import { configureStore } from "store/store";
import { fromJS } from 'immutable'
import data from "store/__tests__/mockstore.json";

describe('Message Components', () => {
	
	it('should render Loader Message', () => {
        const userInfo = {loginId:"kannan", name:"kannan"};
        data.Images[userInfo.loginId].info.isLoading = true;
      
		render(<LoaderMessage />, {
            wrapper: ({ children }) => (
                <UserContextProvider value={userInfo}>
                    <Provider store={configureStore(fromJS(data))}>{children}</Provider>
                </UserContextProvider>
            ),
          });
        expect(screen.getByTestId(`image-loader-message`)).toBeInTheDocument();
        
	});

    it('should render info Message', () => {
        const userInfo = {loginId:"kannan", name:"kannan"};
        data.Images[userInfo.loginId].info.isLoading = false;
		render(<InfoMessage search={""} />, {
            wrapper: ({ children }) => (
                <UserContextProvider value={userInfo}>
                    <Provider store={configureStore(fromJS(data))}>{children}</Provider>
                </UserContextProvider>
            ),
          });
        expect(screen.getByTestId(`image-info-message`)).toBeInTheDocument();
        
	});

    it('should render error Message', () => {
        const userInfo = {loginId:"kannan", name:"kannan"};
        data.Images[userInfo.loginId].info.isLoading = false;
        data.Images[userInfo.loginId].info.data.images = [];
		render(<ErrorMessage />, {
            wrapper: ({ children }) => (
                <UserContextProvider value={userInfo}>
                    <Provider store={configureStore(fromJS(data))}>{children}</Provider>
                </UserContextProvider>
            ),
          });
        expect(screen.getByTestId(`image-error-message`)).toBeInTheDocument();
        
	});

});

