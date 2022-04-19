import 'modules/NASAImage/style.css'
import   { ImageContainer } from 'modules/NASAImage/Containers'
import FormContainer from "./Containers/FormContainer";
 

/**
 * APP - For the app module main file 
 * @param {Array.<Component>} {children} - Child components
 * @returns {Component} 
 */
const Index = ({children}) =>{
    
    return <div className="container-fluid">
              <div className="row">
                <FormContainer></FormContainer>
                <ImageContainer/>
                </div>
              </div>
}


export default Index;