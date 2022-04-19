import useImageStore from "modules/NASAImage/hooks/ImageStoreHook";

export const LoaderMessage = () => {
  const { isLoading } = useImageStore();
  if (isLoading) {
    return (
      <div className="col-12 alert loader_style">
        <i className="fa-solid fa-spinner fa-spin-pulse"></i> Loading images
        please wail...!
      </div>
    );
  }
  return <></>;
};

export const ErrorMessage = () => {
  const { isLoading, searchText, images } = useImageStore();

  if (!isLoading && searchText?.length && images.size === 0) {
    return (
      <div className="col-12 alert  alert-danger my-2 mx-3">
        <i className="fa-solid fa-circle-info  px-2"></i>
        <span> Unable to find the images </span>
      </div>
    );
  }

  return <></>;
};

