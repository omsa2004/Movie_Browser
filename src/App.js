import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MovieView from "./components/MovieView";
import About from "./components/About";
import SearchView from "./components/SearchView";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
// TMDB API key = 39df20a40f86a4c7ab69e94de9655ad9
// link = https://api.themoviedb.org/3/search/movie?api_key=39df20a40f86a4c7ab69e94de9655ad9&language=en-US&query=star%20wars&page=1&include_adult=false

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=39df20a40f86a4c7ab69e94de9655ad9&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/movies/:id" element={<MovieView />} />
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
