import useImageStore from "modules/NASAImage/hooks/ImageStoreHook"
import useImageForm from "modules/NASAImage/hooks/ImageFormHook";

/**
 * ImageNavigation - This compont will help us to navigate to next or previous page of the search. 
 *  @returns {ImageNavigation}
 */

const ImageNavigation = () =>{
  const {currentPage, prev, next} =useImageStore();
  const { getData} = useImageForm();

    if(currentPage != null){
        return <div className="col-sm-6 col-xs-12 py-2">
          <div className="row float-end">
            <div className="col-auto">
              <button data-testid={`image-Navigation-prev`} className="btn btn-primary btn-sm" onClick={getData(prev)} disabled={!prev}>
                Prev
              </button>
            </div>
            <div className="col-auto">
              <div data-testid={`image-Navigation-currentpage`}>{currentPage}</div>
            </div>
            <div className="col-auto">
              <button data-testid={`image-Navigation-next`} className="btn btn-primary btn-sm" onClick={getData(next)} disabled={!next}>
                Next
              </button>
            </div>
          </div>
        </div>
    }

    return <></>
}

export default ImageNavigation;