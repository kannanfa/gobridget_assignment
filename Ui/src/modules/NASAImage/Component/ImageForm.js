import {FormInput} from "common/components/FormElements";
import useImageForm from "modules/NASAImage/hooks/ImageFormHook";
import useImageStore from "modules/NASAImage/hooks/ImageStoreHook"

const ImageForm = () => {
  const { getData, search, onChangeSearch} = useImageForm();
  const {currentPage, prev, next, isLoading} =useImageStore()
  
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-sm-6 col-xs-12 py-2">
            <form className="row g-3" onSubmit={getData(1)}>
                <div className="col-auto">
                    <FormInput  
                        key={"search"} 
                        name={"search"} 
                        placeholder="Search here ...!"  
                        pattern={'^[A-Za-z0-9]+$'} 
                        errorMessage={"Please use only letters and numbers"} 
                        value={search} 
                        onChange={onChangeSearch} />
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary" type="submit">
                    Search
                    </button>
                </div>
           </form>
        </div>
        {currentPage  && <div className="col-sm-6 col-xs-12 py-2">
          <div className="row float-end">
            <div className="col-auto">
              <button className="btn btn-primary btn-sm" onClick={getData(prev)} disabled={!prev}>
                Prev
              </button>
            </div>
            <div className="col-auto">
              <div>{currentPage}</div>
            </div>
            <div className="col-auto">
              <button className="btn btn-primary btn-sm" onClick={getData(next)} disabled={!next}>
                Next
              </button>
            </div>
          </div>
        </div>}
        {!isLoading && search.length === 0 && <div className="col-12 alert alert-primary my-2 mx-3">
        <i className="fa-solid fa-circle-info  px-2"></i>
              <span>Please use the textbox to search.</span>
          </div>}
          
      </div>
    </div>
  );
};

export default ImageForm;
