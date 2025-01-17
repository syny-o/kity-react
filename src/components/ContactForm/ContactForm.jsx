import { useState, useEffect } from "react";

import { API_URL_CONTACT_FORM } from "../../constants/global";
import "./ContactForm.css";
import Button from "../Shared/Button";
import { FaChevronRight, FaCheck } from "react-icons/fa";

import getCookie from "../../helper_func/func_cookie";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ email: "", message: "" });
  const [status, setStatus] = useState(null);

  const validateField = (field, value) => {
    let error = "";
    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRegex.test(value)) {
        error = true;
      }
    } else if (field === "message" || field === "name") {
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
    const nameError = validateField("name", formData.name);
    const messageError = validateField("message", formData.message);

    setErrors({
      email: emailError,
      name: nameError,
      message: messageError,
    });

    if (!emailError && !messageError && !nameError) {
      sendFormDataToApi();
    }
  };


  // this function is only needed in development when both domains (client/server) are different
  const fetchCSRFToken = async () => {
    const response = await fetch("http://localhost:8000", {
      method: "GET",
      credentials: "include", // Allow cookies
    });
  
    // if (response.ok) {
    //   console.log("CSRF cookie was set");
    // } else {
    //   console.error("Error loading CSRF cookie");
    // }
  };
  
  useEffect(() => {
    fetchCSRFToken();
  }, []);


  const sendFormDataToApi = async () => {
    setStatus("Odesílám...");

    try {
      const fData = new FormData();
      fData.set("name", formData.name);
      fData.set("email", formData.email);
      fData.set("message", formData.message);

      // CSRF config
      const csrfToken = getCookie('csrftoken');
      const headers = {
        'X-CSRFToken': csrfToken,
      };


      const response = await fetch(API_URL_CONTACT_FORM, {
        method: "POST",
        credentials: "include", // Sending Cookies
        headers: headers,
        body: fData,
      });

      if (response.ok) {
        setStatus("Odesláno, děkuji za zprávu.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Chyba, zkuste to prosím znovu.");
      }
    } catch (error) {
      setStatus("Chyba, zkuste to prosím znovu.");
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
            {errors.name && <span className="form-error">Vyplňte jméno</span>}
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

        <Button text="Odeslat" type={"submit"} icon={<FaCheck />} />
      </form>
      {status && <p className="form-submit-status">{status}</p>}
    </section>
  );
};

export default ContactForm;
