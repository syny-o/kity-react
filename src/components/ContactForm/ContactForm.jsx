import React, { useEffect, useState } from "react";
import "./ContactForm.css";
import Button from "../Shared/Button";
import Input from "./Input";
import { FormValidation } from "./FormValidation";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");

  const sendFormDataToAPI = async () => {
    const formData = createFormData();
    const response = await fetch(
      "http://localhost:8000/my_app/api/contact-form/",
      {
        method: "POST",
        body: formData,
      }
    ).then((response) => {
      console.log(response.status);
      if (response.status === 400) {
        console.log("error");
      } else {
        setName("");
        setEmail("");
        setMessage("");
      }
    });

    return response;
  };

  const createFormData = () => {
    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("message", message);
    return formData;
  };

  const validateInputs = () => {
    if (name != "") {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = validateInputs();

    // console.log(errors);
    // setErrors(FormValidation(name, email, message));
    // console.log(errors);
    // sendFormDataToAPI();
  };

  return (
    <section className="container">
      <h2 className="section-title">Kontakt</h2>
      <form className="contact-form">
        <div className="form-group">
          <Input
            type={"text"}
            placeholder={"Jmeno"}
            attr={name}
            setAttr={setName}
            setErrors={setErrors}
            errors={errors}
          />
          <Input
            type={"email"}
            placeholder={"Email"}
            attr={email}
            setAttr={setEmail}
            setErrors={setErrors}
          />
        </div>

        <div className="form-group">
          <textarea
            id="message"
            className="form-control message-input"
            placeholder="Zpráva"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <Button
          text={"Odeslat"}
          onClick={(e) => {
            handleSubmit(e);
          }}
        />
      </form>
    </section>
  );
};

export default ContactForm;
