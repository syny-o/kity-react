import "./GroupButtons.css";

import React from "react";

function GroupButtons({ photosTypes, setPhotosType }) {
  return (
    <div className="group-buttons">
      <button
        className={
          photosTypes === "portrait-photos/"
            ? "group-button group-button-selected"
            : "group-button"
        }
        href=""
        onClick={(e) => {
          e.preventDefault();
          setPhotosType("portrait-photos/");
        }}
      >
        Portrety
      </button>
      <button
        className={
          photosTypes === "family-photos/"
            ? "group-button group-button-selected"
            : "group-button"
        }
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
