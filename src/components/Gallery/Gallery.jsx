import { useState, useEffect } from "react";

import "./Gallery.css";
import GroupButtons from "../Shared/GroupButtons";

const BASE_URL = "http://localhost:8000/";
const API_URL = "http://localhost:8000/my_app/api/";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [photosType, setPhotosType] = useState(["portrait-photos/"]);
  useEffect(() => {
    fetch(API_URL + photosType)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setPhotos(data);
        // console.log(photosType);
      });
  }, [photosType]);
  return (
    <div className="container">
      <GroupButtons setPhotosType={setPhotosType} />
      <div className="img-gallery">
        {photos.map((photo) => (
          <div className="img-gallery__item">
            <figure>
              <img
                key={photo.id}
                src={BASE_URL + photo.image}
                alt={photo.title}
                width={300}
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gallery;
