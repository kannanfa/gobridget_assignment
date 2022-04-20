import { ImageForm, ImageNavigation } from "modules/NASAImage/Component";
import { InfoMessage } from "modules/NASAImage/Component/Message";
import useImageForm from "modules/NASAImage/hooks/ImageFormHook";

/**
 * FormContainer - This container consist of two three component 1. Search For 2. Navigation component 3. Info error message
 * @returns {Component}
 */
const FormContainer = () => {
  const { getData, search, onChangeSearch} = useImageForm();

  return (
    <div className="col-12  py-2 px-3" data-testid={`image-form-container`}>
      <div className="row">
        <div className="col-12">
          <div className="row">
            <ImageForm getData={getData} search={search} onChangeSearch={onChangeSearch}></ImageForm>
            <ImageNavigation></ImageNavigation>
            <InfoMessage search={search}></InfoMessage>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
