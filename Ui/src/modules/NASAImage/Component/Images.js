import  useImageStore  from "modules/NASAImage/hooks/ImageStoreHook"
import ImageCard from "./ImageCard";

/**
 * Images - Loop the image list in the store and render the UI for each image
 * @returns {any}
 */
const Images = () =>{
    const {currentPage, images} = useImageStore();

    return  <div className="col-12">
    <div className="row">
    {
        images.map((itm, index)=>{
            const { href, description, title} = itm.toJS()
            return <ImageCard index={index} currentPage={currentPage} href={href} description={description} title={title} key={`image-${currentPage}-${index}`}/>
        })
    }
    </div>

</div>
}

export default Images;