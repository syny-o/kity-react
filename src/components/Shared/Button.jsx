import React from "react";
import "./Button.css";

function Button({ text, href, type, icon }) {
  const handleClick = () => {
    if (type !== "submit") {
      window.open(href, "_blank");
    }
  };

  return (
    <button className="btn" onClick={handleClick} type={type}>
      {icon} {text}
    </button>
  );
}

export default Button;
