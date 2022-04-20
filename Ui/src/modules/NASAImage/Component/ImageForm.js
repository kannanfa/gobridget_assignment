import {FormInput} from "common/components/FormElements";
import PropTypes from 'prop-types';
/**
 * ImageForm - Search image form UI only layouting i sin this component, Business logic moved to seperate Hooks for reusable purpose.
 * @param {Function} props.getData - it is javascript function. it will dispatch the graphql API for us.
 * @param {String} search - it is a string valu we used to search.
 * @param {Function} onChangeSearch - onChangeSearch is a event change handler, it help us to update the value of search string
 * @returns {Component} ImageForm
 */
const ImageForm = ({ getData, search, onChangeSearch}) => {
  const validationPattent = '^[A-Za-z0-9 ]+$'
  
  return (
        <div className="col-sm-6 col-xs-12 py-2" data-testid={`image-form`}>
            <form className="row g-3" onSubmit={getData(1)}>
                <div className="col-auto">
                    <FormInput  
                        key={"search"} 
                        id={"search"}
                        name={"search"} 
                        placeholder="Search here ...!"  
                        pattern={validationPattent} 
                        errorMessage={"Please use only letters, numbers and space"} 
                        value={search} 
                        onChange={onChangeSearch} />
                </div>
                <div className="col-auto">
                    <button data-testid={`image-form-submit-button`} className="btn btn-primary" type="submit" disabled={!search.match(validationPattent)}>
                      Search
                    </button>
                </div>
           </form>
        </div>     
  );
};


ImageForm.propTypes = {
    getData:PropTypes.func,
    search:PropTypes.string,
    onChangeSearch:PropTypes.func
  }

export default ImageForm;
