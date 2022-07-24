import "./App.css";
import Home from "./Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MoviePage from "./MoviePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbId" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
