import React, { useState } from "react";
import "./Cards.scss";
import { Link } from "react-router-dom";

const Cards = () => {
  const [albums, setAlbums] = useState([]);
  const getAlbum = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums").then((response) => response.json());

    setAlbums(res);
  };

  getAlbum();
  return (
    <div className="bg">
      {albums.map((album) => (
        <ul key={album.id}>
          <li>
            <Link className="title" to={`/product/:${album.id}`}>{album.title}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Cards;


