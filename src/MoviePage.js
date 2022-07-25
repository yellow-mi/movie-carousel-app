import React, { Component } from "react";
class MoviePage extends Component {
  state = {
    movie: {}
  }
  
  componentDidMount() {
    
    fetch(`http://www.omdbapi.com/?apikey=a7b772d2&i=${this.props.match}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movie: data }))
      .catch((err) => {
        console.log("error is", err);
      });
  }

  render() {
    const { movie } = this.state;

    return <div>Ok</div>;
  }
}

export default MoviePage;
