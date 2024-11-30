import { useEffect, useState } from "react";
import "./Input.css";

function Input({ type, id, placeholder, attr, setAttr, setErrors, errors }) {
  const handleChange = (e) => {
    setAttr(e.target.value);
    validate(e.target.value);
    console.log(attr);
  };

  const validate = (value) => {
    if (value == "") {
      setErrors("blank field");
    } else {
      setErrors("");
    }
  };

  return (
    <div className="my-input">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={attr}
        onChange={(e) => handleChange(e)}
      />

      <div className="input-error">{errors}</div>
    </div>
  );
}

export default Input;
