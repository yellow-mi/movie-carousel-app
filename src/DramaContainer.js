import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TiHeartFullOutline } from 'react-icons/ti';
import "./App.css";

class Carousel extends Component {
  state = {    
    firstIndex: 0,
    lastIndex: 5,
    dramaMovies: [],
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
    fetch("http://www.omdbapi.com/?s=Drama&apikey=a7b772d2")
    .then((response) => response.json())
    .then((data) => this.setState({ dramaMovies: data.Search }));
  }
  
  render() {
    const { addWishList, genre } =
      this.props;

    const { dramaMovies, firstIndex, lastIndex } = this.state

    return (
      <div>
        <h2 className="left">{genre}</h2>
        <div className="carousel-container">
          {dramaMovies.map((item, i) => {
            if (i >= firstIndex && i < lastIndex) {
              return (
                <div className="container-item" key={item.imdbID}>
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
