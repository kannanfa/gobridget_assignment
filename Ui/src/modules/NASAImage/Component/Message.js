import useImageStore from "modules/NASAImage/hooks/ImageStoreHook";

/**
 * LoaderMessage - Component used for showing the loading message
 * @returns {any}
 */
export const LoaderMessage = () => {
  const { isLoading } = useImageStore();
  if (isLoading) {
    return (
      <div className="col-12 alert loader_style" data-testid={`image-loader-message`}>
        <i className="fa-solid fa-spinner fa-spin-pulse"></i> Loading images
        please wail...!
      </div>
    );
  }
  return <></>;
};

/**
 * ErrorMessage - Show the common error message.
 * @returns {Component} 
 */
export const ErrorMessage = () => {
  const { isLoading, searchText, images, error } = useImageStore();
  console.log(isLoading, searchText, images, error,"ErrorMessage, ::::::::::::::::::::::::::::")
  if (!isLoading && searchText?.length && images.size === 0) {
    let message = ` Unable to find the images`;
    if(error && error.get('message')){
      message = error.get('message')
    }
    return (
      <div className="col-12 alert  alert-danger my-2 mx-3" data-testid={`image-error-message`}>
        <i className="fa-solid fa-circle-info  px-2"></i>
        <span> {message} </span>
      </div>
    );
  }

  return <></>;
};


/**
 * InfoMessage - show the common error message
 * @param {String} props.search - Search value from the text box
 * @returns {Component}
 */
export const InfoMessage = ({search}) =>{
  const { isLoading } = useImageStore();
  
  if(!isLoading && search.length === 0){
    return <div className="col-12 alert alert-primary my-2 mx-3" data-testid={`image-info-message`}>
              <i className="fa-solid fa-circle-info  px-2"></i>
                    <span>Please use the textbox to search.</span>
          </div>
  }

  return <></>
}

