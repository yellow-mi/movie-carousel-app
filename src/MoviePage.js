import React, { Component } from "react";
class MoviePage extends Component {
  state = {
    movie: {},
  };

  componentDidMount({ match }) {
    fetch(`http://www.omdbapi.com/?apikey=a7b772d2&i=${match.params.id}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movie: data }));
  }

  render() {
    const { movie } = this.state;
    console.log(movie);
    return <div>Ok</div>;
  }
}

export default MoviePage;
