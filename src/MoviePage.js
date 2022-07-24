import React, { Component } from "react";
class MoviePage extends Component {
  state = {
    movie: {},
  };

  // getMovieInfo = (res) => {
  //   this.setState({
  //     movie: res,
  //   });
  // };

  // movieRequest = async ({ match }) => {
  //   const url = `http://www.omdbapi.com/?i=${match.params.id}`;

  //   const response = await fetch(url);
  //   const responseJson = await response.json();

  //   console.log(responseJson)
    
  //   this.getMovieInfo(responseJson);
  // };

  componentDidMount({ match }) {
    // this.movieRequest();

    fetch(
      `http://www.omdbapi.com/?i=${match.params.id}`
    ).then(response => response.json()).then(data => this.setState({ movie: data }))
  }


  render() {

    const { movie } = this.state;
    console.log(movie)
    return <div>Ok</div>;
  }
}

export default MoviePage;
