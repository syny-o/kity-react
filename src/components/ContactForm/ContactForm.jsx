import { useState } from "react";

import { API_URL_CONTACT_FORM } from "../../constants/global";
import "./ContactForm.css";
import Button from "../Shared/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("");

  const validateField = (field, value) => {
    let error = "";
    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRegex.test(value)) {
        error = true;
      }
    } else if (field === "message") {
      if (value.trim() === "") {
        error = true;
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Update form data
    setFormData({
      ...formData,
      [id]: value,
    });

    // Validate the field
    if (id === "email" || id === "message") {
      const error = validateField(id, value);
      setErrors({
        ...errors,
        [id]: error,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");

    // Validate all fields
    const emailError = validateField("email", formData.email);
    const messageError = validateField("message", formData.message);

    setErrors({
      email: emailError,
      message: messageError,
    });

    if (!emailError && !messageError) {
      sendFormDataToApi();
    }
  };

  const sendFormDataToApi = async () => {
    setStatus("Sending...");

    try {
      const fData = new FormData();
      fData.set("name", formData.name);
      fData.set("email", formData.email);
      fData.set("message", formData.message);
      console.log(JSON.stringify(formData));
      const response = await fetch(API_URL_CONTACT_FORM, {
        method: "POST",
        // headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(formData),
        body: fData,
      });

      if (response.ok) {
        setStatus("Odesláno");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Error");
      }
    } catch (error) {
      setStatus("Error");
    }
  };

  return (
    <section id="contact" className="container">
      <h2 className="section-title">Kontakt</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field-wrapper">
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder={"Jméno"}
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-field-wrapper">
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="form-error">{"Nesprávný formát"}</span>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-field-wrapper">
            <textarea
              id="message"
              className="form-control message-input"
              placeholder="Zpráva"
              value={formData.message}
              onChange={handleChange}
              rows={6}
            ></textarea>
            {errors.message && (
              <span className="form-error">Napište zprávu</span>
            )}
          </div>
        </div>

        <Button text="Odeslat" href={""} type={"submit"} />
      </form>
      <p className="form-submit-status">{status}</p>
    </section>
  );
};

export default ContactForm;
