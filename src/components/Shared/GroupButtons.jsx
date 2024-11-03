import "./GroupButtons.css";

import React from "react";

function GroupButtons({ setPhotosType }) {
  return (
    <div className="group-buttons">
      <button
        className="group-button"
        href=""
        onClick={(e) => {
          e.preventDefault();
          setPhotosType("portrait-photos/");
        }}
      >
        Portrety
      </button>
      <button
        className="group-button"
        href=""
        onClick={(e) => {
          e.preventDefault();
          setPhotosType("family-photos/");
        }}
      >
        Rodinne
      </button>
      <button className="group-button">Detske</button>
      <button className="group-button">Svatby</button>
    </div>
  );
}

export default GroupButtons;
