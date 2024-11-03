import React, { useEffect, useState } from "react";
import "./ContactForm.css";
import Button from "../Shared/Button";

const ContactForm = () => {
  // useEffect(() => {
  //   sendFormDataToAPI();
  // }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
        alert("error");
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

  return (
    <section className="container">
      <h2 className="section-title">Kontakt</h2>
      <form className="contact-form">
        <div className="form-group">
          {/* <label htmlFor="name">Name:</label> */}
          <input
            type="text"
            id="name"
            className="form-control name-input"
            placeholder="Jméno"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="form-control email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* <label htmlFor="email">Email:</label> */}

        <div className="form-group">
          {/* <label htmlFor="message">Message:</label> */}
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
            e.preventDefault();
            sendFormDataToAPI();
          }}
        />
      </form>
    </section>
  );
};

export default ContactForm;
