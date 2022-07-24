import React, { Component } from "react";
import CarouselContainer from "./CarouselContainer";
import FavouritesPage from "./FavouritesPage";
import Header from "./Header";

class Home extends Component {
  state = {
    firstIndex: 0,
    lastIndex: 5,
    docMovies: [],
    dramaMovies: [],
    horrorMovies: [],
    wishList: [],
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

  addWishList = (movie) => {
    this.setState((prevState) => ({
      wishList: [...this.prevState.wishList, movie]
    }));
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?s=Horror&apikey=a7b772d2")
      .then((response) => response.json())
      .then((data) => this.setState({ horrorMovies: data.Search }));

    fetch("http://www.omdbapi.com/?s=Drama&apikey=a7b772d2")
      .then((response) => response.json())
      .then((data) => this.setState({ dramaMovies: data.Search }));

    fetch("http://www.omdbapi.com/?s=Documentary&apikey=a7b772d2")
      .then((response) => response.json())
      .then((data) => this.setState({ docMovies: data.Search }));
  }

  render() {
    const { horrorMovies, docMovies, dramaMovies, firstIndex, lastIndex, wishList } =
      this.state;

    return (
      <div className="home">
        <Header />
        <CarouselContainer
          addWishList={this.addWishList}
          firstIndex={firstIndex}
          items={docMovies}
          genre="Documentaries"
          lastIndex={lastIndex}
          setPrev={this.setPrev}
          setNext={this.setNext}
        />
        <CarouselContainer
          addWishList={this.addWishList}
          firstIndex={firstIndex}
          genre="Drama"
          items={dramaMovies}
          lastIndex={lastIndex}
          setPrev={this.setPrev}
          setNext={this.setNext}
        />
        <CarouselContainer
          addWishList={this.addWishList}
          firstIndex={firstIndex}
          genre="Horror"
          items={horrorMovies}
          lastIndex={lastIndex}
          setPrev={this.setPrev}
          setNext={this.setNext}
        />
        <FavouritesPage addWishList={this.addWishList} wishList={wishList} />
      </div>
    );
  }
}

export default Home;
