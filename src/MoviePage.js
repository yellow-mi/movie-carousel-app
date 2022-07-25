import React, { Component } from "react";
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
    const title = this.state.Title

    if(title.includes("drama")) {
      this.setState({
        styleForType: "drama"
      })
    } else if(title.includes("documentary")) {
      this.setState({
        styleForType: "documentary"
      })
    } else {
      this.setState({
        styleForType: "horror"
      })
    }
  }

  render() {
    const { movie } = this.state;
    const whichStyle = this.state.styleForType
    
    return (
      <div>
        <h2>{movie.Title}</h2>
        <img alt={movie.Title} src={movie.Poster}></img>
        <p>Year: {movie.Year}</p>
        <p>Time: {movie.Runtime}</p>
        <p>Actors: {movie.Actors}</p>
      </div>
    );
  }
}

export default MoviePage;
