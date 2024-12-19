import { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";

import { API_URL, BASE_URL } from "../../constants/global";
import "./Gallery.css";
import GroupButtons from "../Shared/GroupButtons";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [photosType, setPhotosType] = useState("portrait-photos/");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL + photosType)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setPhotos(data);
        setLoading(false);
        // console.log(photosType);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [photosType]);
  return (
    <section className="container">
      <h2 className="section-title">Galerie</h2>
      <div className="gallery">
        <GroupButtons photosTypes={photosType} setPhotosType={setPhotosType} />
        {loading && (
          <div className="gallery-loader-wrapper">
            <PulseLoader
              loading={loading}
              color="white"
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
        {!loading && (
          <div className="img-gallery">
            {photos.map((photo) => (
              <div className="img-gallery__item" key={photo.id}>
                <figure>
                  <img
                    // key={photo.id}
                    src={BASE_URL + photo.image}
                    alt={photo.title}
                    width={300}
                  />
                </figure>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default Gallery;
