import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import Search from "./components/Search";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const apiUrl = "http://www.omdbapi.com/?apikey=f9b28153";

  async function searchMovies(title) {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    setSearchTerm("");
  }

  useEffect(() => {
    searchMovies("avengers");
  }, []);

  return (
    <div className="app">
      <h1>Movie DB</h1>

      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchMovies={searchMovies}
      />

      <div className="movies-container">
        {movies.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
