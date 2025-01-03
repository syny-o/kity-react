import React from "react";
import "./Button.css";

function Button({ text, type, icon, targetId }) {
  const handleClick = () => {
    if (targetId) {
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <button className="btn" onClick={handleClick} type={type}>
      {icon} {text}
    </button>
  );
}

export default Button;
