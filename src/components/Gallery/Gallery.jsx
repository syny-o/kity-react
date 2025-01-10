import { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";

import { API_URL, BASE_URL } from "../../constants/global";
import "./Gallery.css";
import GroupButtons from "../Shared/GroupButtons";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [photosType, setPhotosType] = useState("portrait-photos/");
  const [loading, setLoading] = useState(false);

  const preloadImages = (photos) => {
    const promises = photos.map((photo) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = BASE_URL + photo.image;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    return Promise.all(promises);
  };

  useEffect(() => {
    setLoading(true);
    fetch(API_URL + photosType)
      .then((res) => res.json())
      .then((data) => {
        // Preload images
        return preloadImages(data).then(() => {
          setPhotos(data);
          setLoading(false);
        });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [photosType]);

  return (
    <section className="container" id="gallery">
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
