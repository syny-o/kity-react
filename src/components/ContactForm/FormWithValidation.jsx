import React, { useState } from "react";

function FormWithValidation() {
  const [formData, setFormData] = useState({ input1: "", input2: "" });
  const [errors, setErrors] = useState({ input1: false, input2: false });

  const validateEmail = (email) => {
    let errorMessage;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.trim() === "") {
      errorMessage = "BLANK EMAIL";
    } else if (!emailPattern.test(email)) {
      errorMessage = "NOT VALID EMAIL";
    } else {
      errorMessage = "";
    }
    return errorMessage;
  };

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate input while typing
    if (name === "input1") {
      setErrors({
        ...errors,
        [name]: value.trim() === "" ? "BLANK" : "",
      });
    } else {
      setErrors({
        ...errors,

        [name]: validateEmail(value),
      });
    }
  };

  // Handler for form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all inputs on submit
    const newErrors = {
      input1: formData.input1.trim() === "" ? "BLANK" : "",
      input2: validateEmail(formData.input2.trim()),
    };
    setErrors(newErrors);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Input 1:
          <input
            type="text"
            name="input1"
            value={formData.input1}
            onChange={handleChange}
          />
        </label>
        {errors.input1 && (
          <span style={{ color: "red", fontSize: "12px", marginLeft: "5px" }}>
            {errors.input1}
          </span>
        )}
      </div>
      <div>
        <label>
          Input 2:
          <input
            type="text"
            name="input2"
            value={formData.input2}
            onChange={handleChange}
          />
        </label>
        {errors.input2 && (
          <span style={{ color: "red", fontSize: "12px", marginLeft: "5px" }}>
            {errors.input2}
          </span>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormWithValidation;
