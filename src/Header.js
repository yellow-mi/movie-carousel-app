import React from "react";
import { Link } from "react-router-dom";
import popcorn from "./img/popcorn.png";

export default function Header() {
  return (
    <div>
      <Link to="/">
      <img alt="popcorn" src={popcorn} className="logo" />
      </Link>
      <h1>Movie Carousel App</h1>
      <hr className="line-color"></hr>
    </div>
  );
}
