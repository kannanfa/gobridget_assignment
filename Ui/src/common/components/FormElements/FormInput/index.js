import { useState } from "react";
import './style.css'

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
        <label data-testid={`label-${props.name}`} htmlFor="search" className="visually-hidden">Search</label>
      <input
         className="form-control"
         data-testid={`input-${props.name}`}
        {...inputProps}
        onChange={onChange}
        onFocus={handleFocus}
        focused={focused.toString()}
       
      />
      <span data-testid={`errormessage-${props.name}`} >{errorMessage}</span>
    </div>
  );
};

export default FormInput;