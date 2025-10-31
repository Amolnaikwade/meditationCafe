import React from "react";
import "./PhotoPage.css";
import yoga1 from "../assets/yogaclass1.jpg";
import yoga2 from "../assets/yogaclass2.jpg";
import yoga3 from "../assets/yogaclass3.jpg";
import yoga4 from "../assets/yogaclass4.jpg";
import yoga5 from "../assets/yogaclass5.jpg";

const PhotoPage = () => {
  const photos = [yoga1, yoga2, yoga3, yoga4, yoga5];

  return (
    <div className="photo-page">
      <h2>All Yoga Photos</h2>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Yoga ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default PhotoPage;
