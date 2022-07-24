import React from "react";
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <h1>Movie Carousel App</h1>
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/wish-list">
            Wish List
          </Link>
        </li>
      </ul>
    </nav>
    <hr className="line-color"></hr>
    </div>
  );
}
