import React from "react";
import "./Button.css";

function Button({ text, href, onClick }) {
  return (
    <a className="btn" href={href} onClick={onClick}>
      {text}
    </a>
  );
}

export default Button;
