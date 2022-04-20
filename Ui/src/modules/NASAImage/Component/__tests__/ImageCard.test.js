import React from 'react'
import { render, screen} from '@testing-library/react'
import ImageCard from '../ImageCard'

describe('ImageCard Component', () => {
	
	it('should render image card', () => {
        
        const obj ={
            href:"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
            description : "ASADA asasdsa asd asdasd asdasdasdasd asdas",
            title:"Moon",
            index:4,
            currentPage:5
        }
		render(<ImageCard {...obj}/>);
        expect(screen.getByTestId(`image-card-4-5`)).toBeInTheDocument();
        expect(screen.getByTestId(`image-card-image-4-5`)).toBeInTheDocument();
        expect(screen.getByTestId(`image-card-title-4-5`)).toBeInTheDocument();
        expect(screen.getByTestId(`image-card-description-4-5`)).toBeInTheDocument();
	});

});
