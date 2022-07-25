import React, { Component } from "react";
import DocContainer from "./DocContainer";
import DramaContainer from "./DramaContainer";
import HorrorContainer from "./HorrorContainer";
import FavouritesPage from "./FavouritesPage";
import Header from "./Header";

class Home extends Component {
  state = {
    horrorMovies: [],
    wishList: [],
  };

  addWishList = (movie) => {
    this.setState((prevState) => ({
      wishList: [
        ...prevState.wishList,
        movie
      ]
    }));
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?s=Horror&apikey=a7b772d2")
      .then((response) => response.json())
      .then((data) => this.setState({ horrorMovies: data.Search }));

    fetch("http://www.omdbapi.com/?s=Drama&apikey=a7b772d2")
      .then((response) => response.json())
      .then((data) => this.setState({ dramaMovies: data.Search }));
  }

  render() {
    const { wishList } =
      this.state;

    return (
      <div className="home">
        <Header />
        <DocContainer
          addWishList={this.addWishList}
          genre="Documentaries"
        />
        <DramaContainer
          addWishList={this.addWishList}
          genre="Drama"
        />
        <HorrorContainer
          addWishList={this.addWishList}
          genre="Horror"
        />
        <FavouritesPage addWishList={this.addWishList} wishList={wishList} />
      </div>
    );
  }
}

export default Home;
