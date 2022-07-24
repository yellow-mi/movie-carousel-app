import React, { Component } from "react";
import CarouselContainer from "./CarouselContainer";
import Header from "./Header";

class Home extends Component {
  state = {
    firstIndex: 0,
    lastIndex: 5,
    docMovies: [],
    dramaMovies: [],
    horrorMovies: [],
  };

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

  getDocMovies = (result) => {
    this.setState({
      docMovies: result,
    })
  }
  getDramaMovies = (result) => {
    this.setState({
      dramaMovies: result,
    })
  }

  getHorrorMovies = (result) => {
    this.setState({
      horrorMovies: result,
    })
  }

   docMoviesRequest = async () => {
    const url = 'http://www.omdbapi.com/?s=Documentary&apikey=a7b772d2'

    const response = await fetch(url);
    const responseJson = await response.json();

    this.getDocMovies(responseJson.Search)
  }

  dramaMoviesRequest = async () => {
    const url = 'http://www.omdbapi.com/?s=Drama&apikey=a7b772d2'

    const response = await fetch(url);
    const responseJson = await response.json();

    this.getDramaMovies(responseJson.Search)
  }

  horrorMoviesRequest = async () => {
    const url = 'http://www.omdbapi.com/?s=Comedy&apikey=a7b772d2'

    const response = await fetch(url);
    const responseJson = await response.json();

    this.getHorrorMovies(responseJson.Search)
  }

  componentDidMount() {
    this.docMoviesRequest()
    this.dramaMoviesRequest()
    this.horrorMoviesRequest()
  }

  render() {
    const { horrorMovies, docMovies, dramaMovies, firstIndex, lastIndex } = this.state;

    return (
      <div className="home">
        <Header />
        <CarouselContainer
          firstIndex={firstIndex}
          items={docMovies}
          genre="Documentaries"
          lastIndex={lastIndex}
          setPrev={this.setPrev}
          setNext={this.setNext}
        />
        <CarouselContainer
          firstIndex={firstIndex}
          genre="Drama"
          items={dramaMovies}
          lastIndex={lastIndex}
          setPrev={this.setPrev}
          setNext={this.setNext}
        />
        <CarouselContainer
          firstIndex={firstIndex}
          genre="Horror"
          items={horrorMovies}
          lastIndex={lastIndex}
          setPrev={this.setPrev}
          setNext={this.setNext}
        />
      </div>
    );
  }
}

export default Home;
