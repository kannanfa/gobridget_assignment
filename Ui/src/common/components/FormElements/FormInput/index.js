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
        <label htmlFor="search" class="visually-hidden">Search</label>
      <input
         class="form-control"
        {...inputProps}
        onChange={onChange}
        onFocus={handleFocus}
        focused={focused.toString()}
       
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;