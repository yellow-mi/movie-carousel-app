import "./App.css";
import Home from "./Home";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import MoviePage from "./MoviePage";
import Header from "./Header";

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" component={MoviePage} />
        </Switch>
    </div>
      </BrowserRouter>
  );
}

export default App;
