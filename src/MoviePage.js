import React, { Component } from "react";
import "./App.css";

class MoviePage extends Component {
  state = {
    movie: [],
    styleForType: "",
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`http://www.omdbapi.com/?apikey=a7b772d2&i=${id}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movie: data }))
      .then(()=>this.chooseStyle())
      .catch((err) => {
        console.log("error is", err);
      });

    ;
  }

  chooseStyle = () => {
    const title = this.state.movie.Title;

    if (title.toLowerCase().includes("drama")) {
      this.setState({
        styleForType: "drama",
      });
    } else if (title.toLowerCase().includes("documentary")) {
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
      <div>
        <div  className={`${this.state.styleForType} movie-page-container`}>
          <div>
            <img
              alt={movie.Title}
              className="movie-img"
              src={movie.Poster}
            ></img>
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
        <div className={`${this.state.styleForType} movie-page-container-2`}>
          <div className="movie-box-info">
            <h3>Description:</h3>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default MoviePage;
