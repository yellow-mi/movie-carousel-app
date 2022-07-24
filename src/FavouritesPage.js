import React from "react";
import { TiHeartFullOutline } from "react-icons/ti";

const FavouritesPage = (props) => {
  <div className="carousel-container">
    {props.wishList.map((movie) => {
      return (
        <div className="container-item" key={movie.imdbId}>
          <img
            alt={movie.Title}
            key={movie.id}
            src={movie.Poster}
            className="visible"
          />
          <h3>{movie.Title}</h3>
          <button className="heart-button" onClick={() => props.addWishList(movie)}>
            <TiHeartFullOutline className="icon" />
          </button>
        </div>
      );
    })}
  </div>;
};

export default FavouritesPage;
