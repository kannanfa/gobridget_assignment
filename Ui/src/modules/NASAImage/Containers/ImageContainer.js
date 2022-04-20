
import { Images} from "modules/NASAImage/Component"
import { ErrorMessage, LoaderMessage } from "../Component/Message";


/**
 * ImageContainer - This container consist of three sub component 1. Loader Message 2. Error Message 3. Image list
 * @returns {Component} 
 */
const ImageContainer = () =>{
    return  <>
        <LoaderMessage></LoaderMessage> 
        <ErrorMessage></ErrorMessage>
        <Images></Images>
    </>
    
}

export default ImageContainer;