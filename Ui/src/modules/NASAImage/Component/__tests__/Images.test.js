import React from 'react'
import { render, screen} from '@testing-library/react'
import Images from '../Images'
import { UserContextProvider } from 'common/context'
import { Provider } from 'react-redux'
import { configureStore } from "store/store";
import { fromJS } from 'immutable'
import data from "store/__tests__/mockstore.json";

describe('Image list Component', () => {
	
	it('should render image list', () => {
        const userInfo = {loginId:"kannan", name:"kannan"};
        
      
		render(<Images />, {
            wrapper: ({ children }) => (
                <UserContextProvider value={userInfo}>
                    <Provider store={configureStore(fromJS(data))}>{children}</Provider>
                </UserContextProvider>
            ),
          });
        
         const images =  data?.Images?.kannan?.info?.data?.images;
         const currentpage = data?.Images?.kannan?.info?.data?.from;
         
         images.forEach((itm, index)=>{
             const key = `${index}-${currentpage}`
            expect(screen.getByTestId(`image-card-${key}`)).toBeInTheDocument();
            expect(screen.getByTestId(`image-card-image-${key}`)).toBeInTheDocument();
            expect(screen.getByTestId(`image-card-title-${key}`)).toBeInTheDocument();
            expect(screen.getByTestId(`image-card-description-${key}`)).toBeInTheDocument();
         })
          ;
        
        
	});

});
