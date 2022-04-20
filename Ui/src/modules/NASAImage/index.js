import 'modules/NASAImage/style.css'
import   { ImageContainer } from 'modules/NASAImage/Containers'
import FormContainer from "./Containers/FormContainer";
import './style.css'
 

/**
 * NASAImages - this component is the base component for Images module.
 * @returns {Component} 
 */
const Index = () =>{
    
    return <div className="container-fluid" data-testid={`image-index`}>
              <div className="row">
                <FormContainer></FormContainer>
                <ImageContainer/>
                </div>
              </div>
}


export default Index;