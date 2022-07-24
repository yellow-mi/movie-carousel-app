import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TiHeartFullOutline } from 'react-icons/ti';
import "./App.css";

class Carousel extends Component {
  render() {
    const { addWishList, firstIndex, genre, lastIndex, items, setPrev, setNext } =
      this.props;

    return (
      <div>
        <h2 className="left">{genre}</h2>
        <div className="carousel-container">
          {items.map((item, i) => {
            if (i >= firstIndex && i < lastIndex) {
              return (
                <div className="container-item" key={item.imdbId}>
                  <img
                    alt={item.Title}
                    key={item.id}
                    src={item.Poster}
                    className="visible"
                  />
                  <h3>{item.Title}</h3>
                  <div className="container">
                    <button className="heart-button" onClick={(e) => addWishList()}>
                    <TiHeartFullOutline className="icon" />
                    </button>
                    <Link to={`/movie/${item.imdbID}`}>
                      <button className="btn-2">info</button>
                    </Link>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="buttons">
          <button className="btn" onClick={setPrev}>
            {"<"}
          </button>
          <button className="btn" onClick={setNext}>
            {">"}
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
