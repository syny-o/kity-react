import React from "react";
import "./Button.css";

function Button({ text, href, type, icon }) {
  return (
    <a className="btn" type={type} href={href}>
      {icon} {text}
    </a>
  );
}

export default Button;
