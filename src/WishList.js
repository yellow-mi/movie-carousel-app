import React from "react";
import "./App.css";

const FavouritesPage = (props) => {
  return (
    <div className="container-movie">
      <h2>Wish List</h2>
      {props.wishList.map((movie) => (
        <ul className="fav-list">
          <li key={movie.imdbID}>
            <div>
              <p>{movie.Title}</p>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default FavouritesPage;
