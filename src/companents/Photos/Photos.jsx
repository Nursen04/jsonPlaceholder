import React, { useEffect, useState } from "react";
import "./Photos.scss";
import { useParams } from "react-router";
import loading from "../../loading/b6e0b072897469.5bf6e79950d23.gif"

const Card = () => {
  const [photos, setPhotos] = useState([]);

  const params = useParams();

  const getPhoto = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos").then((response) => response.json());
    const findCard = res.filter((el) => {
      return el.albumId == params.num.split(':')[1];
    });
    setPhotos(findCard)
  };

  useEffect(() => {
      getPhoto();
  }, []);

  return <div className="photos">
    {photos.length === 0 ? <img src={loading} alt="loading" className="loading"/> : photos.map((photo) => (
        <img key={photo.id} className="img" src={photo.url} alt="" />
    ))}
  </div>;
};

export default Card;
