import "./App.css";
import Home from "./Home";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import FavouritesPage from "./FavouritesPage";
import MoviePage from "./MoviePage";

function App() {

  return (
    <BrowserRouter>
    <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" component={MoviePage} />
          {/* <Route
            component={<MoviePage />}
            exact
            path="/movie/:id"
            render={({ match }) => <MoviePage id={match.params} />}
          /> */}
          <Route exact path="/wish-list" component={FavouritesPage} />
        </Switch>
    </div>
      </BrowserRouter>
  );
}

export default App;
