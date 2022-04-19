
import { Images} from "modules/NASAImage/Component"
import { ErrorMessage, LoaderMessage } from "../Component/Message";

const ImageContainer = () =>{
    return  <>
        <LoaderMessage></LoaderMessage> 
        <ErrorMessage></ErrorMessage>
        <Images></Images>
    </>
    
}

export default ImageContainer;