import React, { Component } from "react";
import "./App.css";

class MoviePage extends Component {
  state = {
    movie: [],
    styleForType: null,
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`http://www.omdbapi.com/?apikey=a7b772d2&i=${id}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movie: data }))
      .catch((err) => {
        console.log("error is", err);
      });
  }

  chooseStyle = () => {
    const title = this.state.Title;

    if (title.includes("drama")) {
      this.setState({
        styleForType: "drama",
      });
    } else if (title.includes("documentary")) {
      this.setState({
        styleForType: "documentary",
      });
    } else {
      this.setState({
        styleForType: "horror",
      });
    }
  };

  render() {
    const { movie } = this.state;

    return (
      <div className="movie-page-container">
        <div>
          <img alt={movie.Title} className="movie-img" src={movie.Poster}></img>
        </div>
        <div>
          <div className="movie-box-info">
          <h1>{movie.Title}</h1>
          <h3>{movie.Plot}</h3>
          <h3>Year: {movie.Year}</h3>
          <h3>Time: {movie.Runtime}</h3>
          <h3>Director: {movie.Director}</h3>
          <h3>Actors: {movie.Actors}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default MoviePage;
