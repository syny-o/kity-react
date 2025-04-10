import { FaUser, FaBaby, FaUserFriends, FaChild, FaDollarSign } from "react-icons/fa";

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
        onClick={(e) => {
          e.preventDefault();
          setPhotosType("family-photos/");
        }}
      >
        <FaChild />
        Rodiny
      </button>
      <button
        className={
          photosTypes === "pregnant-photos/"
            ? "group-button group-button-selected"
            : "group-button"
        }
        onClick={(e) => {
          e.preventDefault();
          setPhotosType("pregnant-photos/");
        }}
      >
        <FaBaby />
        Těhotné
      </button>
      <button
        className={
          photosTypes === "commerce-photos/"
            ? "group-button group-button-selected"
            : "group-button"
        }
        onClick={(e) => {
          e.preventDefault();
          setPhotosType("commerce-photos/");
        }}
      >
        <FaDollarSign />
        Komerce
      </button>
      <button
        className={
          photosTypes === "wedding-photos/"
            ? "group-button group-button-selected"
            : "group-button"
        }
        onClick={(e) => {
          e.preventDefault();
          setPhotosType("wedding-photos/");
        }}
      >
        <FaUserFriends />
        Svatby
      </button>
    </div>
  );
}

export default GroupButtons;
