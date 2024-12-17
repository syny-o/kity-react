import { FaUser, FaBaby, FaUserFriends, FaChild } from "react-icons/fa";

import "./GroupButtons.css";

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
        <FaUser />
        Portréty
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
        <FaChild />
        Rodiny
      </button>
      <button className="group-button">
        <FaBaby />
        Děti
      </button>
      <button className="group-button">
        <FaUserFriends />
        Svatby
      </button>
    </div>
  );
}

export default GroupButtons;
