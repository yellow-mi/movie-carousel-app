import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";

class Carousel extends Component {
  render() {
    const { firstIndex, genre, lastIndex, items, setPrev, setNext } =
      this.props;

      const id = this.props.items.imdb

    return (
      <div>
        <h2 className="left">{genre}</h2>
        <div className="carousel-container">
          {items.map((item, i) => {
            if (i >= firstIndex && i < lastIndex) {
              return (
                <div className="container-item">
                  <img
                    alt={item.Title}
                    key={item.id}
                    src={item.Poster}
                    className="visible"
                  />
                  <Link to={`/movie/%{id}`}>
                    <h3>{item.Title}</h3>
                  </Link>
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
