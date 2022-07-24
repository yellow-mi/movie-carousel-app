import "./App.css";
import Home from "./Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import FavouritesPage from "./FavouritesPage"
import MoviePage from "./MoviePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/wisht-list" element={<FavouritesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
