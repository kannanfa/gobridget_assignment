import React from 'react'
import { act, fireEvent, render, screen} from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import ImageForm from '../ImageForm'
import useImageForm from 'modules/NASAImage/hooks/ImageFormHook'
import { UserContextProvider } from 'common/context'
import { Provider } from 'react-redux'
import { configureStore } from "store/store";
import { fromJS } from 'immutable'
import data from "store/__tests__/mockstore.json";


describe('Image Form Component', () => {
	
	it('should render image form', async () => {
        const userInfo = {loginId:"kannan", name:"kannan"};
        const { result } = renderHook(() => useImageForm(), {
            wrapper: ({ children }) => (
                <UserContextProvider value={userInfo}>
                    <Provider store={configureStore(fromJS(data))}>{children}</Provider>
                </UserContextProvider>
            ),
          })
        const { getData, search, onChangeSearch} = result.current;
		render(<ImageForm  getData={getData} search={search} onChangeSearch={onChangeSearch}/>);
        expect(screen.getByTestId(`image-form`)).toBeInTheDocument();
        expect(screen.getByTestId(`image-form-submit-button`)).toBeInTheDocument();
        expect(screen.getByTestId(`label-search`)).toBeInTheDocument();
        expect(screen.getByTestId(`input-search`)).toBeInTheDocument();
        expect(screen.getByTestId(`errormessage-search`)).toBeInTheDocument();
        const inputField = screen.getByTestId(`input-search`) 

        fireEvent.change(inputField, {target: {value: 'Mar'}});
        expect(result.current.search).toBe("Mar");
        
        fireEvent.change(inputField, {target: {value: 'Moon#'}});
        expect(result.current.search).toBe("Moon#");
      

	});

});
