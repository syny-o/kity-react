function FormValidation({ name, email, message }) {
  const errors = {};
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailPattern.test(email)) {
    errors.email = "Wrong Email";
  } else {
    errors.email = "OK";
  }

  if (name != "Ondra") {
    errors.name = "Blank Name";
  } else {
    errors.name = "OK";
  }

  return errors;
}

export { FormValidation };
