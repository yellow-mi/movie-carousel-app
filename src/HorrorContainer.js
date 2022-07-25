import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TiHeartFullOutline } from 'react-icons/ti';
import "./App.css";

class Carousel extends Component {
  state = {    
    firstIndex: 0,
    lastIndex: 5,
    horrorMovies: [],
  }

  setPrev = () => {
    this.setState((oldState) => ({
      ...oldState,
      firstIndex: oldState.firstIndex - 1,
      lastIndex: oldState.lastIndex - 1,
    }));
  };

  setNext = () => {
    this.setState((oldState) => ({
      ...oldState,
      firstIndex: oldState.firstIndex + 1,
      lastIndex: oldState.lastIndex + 1,
    }));
  };
  
  componentDidMount() {
    fetch("http://www.omdbapi.com/?s=Horror&apikey=a7b772d2")
    .then((response) => response.json())
    .then((data) => this.setState({ horrorMovies: data.Search }));
  }
  
  render() {
    const { addWishList, genre } =
      this.props;

    const { horrorMovies, firstIndex, lastIndex } = this.state

    return (
      <div>
        <h2 className="left">{genre}</h2>
        <div className="carousel-container">
          {horrorMovies.map((movie, i) => {
            if (i >= firstIndex && i < lastIndex) {
              return (
                <div className="container-movie" key={movie.imdbId}>
                  <img
                    alt={movie.Title}
                    src={movie.Poster}
                    className="img-card"
                  />
                  <h3>{movie.Title}</h3>
                  <div className="container">
                    <button className="heart-button" onClick={() => addWishList(movie)}>
                    <TiHeartFullOutline className="icon" />
                    </button>
                    <Link to={`/movie/${movie.imdbID}`}>
                      <button className="btn-2">Info</button>
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
          <button className="btn" onClick={this.setPrev}>
            {"<"}
          </button>
          <button className="btn" onClick={this.setNext}>
            {">"}
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
