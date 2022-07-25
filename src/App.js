import "./App.css";
import Home from "./Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import FavouritesPage from "./FavouritesPage";
import MoviePage from "./MoviePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/movie/:id" element={<MoviePage />} /> */}
          <Route
            element={<MoviePage />}
            exact
            path="/movie/:id"
            render={({ match }) => <MoviePage id={match.params.imdbID} />}
          />
          <Route exact path="/wish-list" element={<FavouritesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
