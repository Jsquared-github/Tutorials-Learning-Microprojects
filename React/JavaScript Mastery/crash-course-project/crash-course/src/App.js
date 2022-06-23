import { useEffect, useState } from "react";
import './style.css';
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

const API_URL = 'https://www.omdbapi.com?apikey=73234f52'

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('')
  }, [])


  return (
    <div className="app">
      <h1> MovieLand </h1>
      <div className="search">
        <input onChange={(e) => setSearchTerm(e.target.value)} type="text"  value={searchTerm} placeholder="Seacrch for movies" />
        <img src={SearchIcon} alt="Seach" onClick={() => { searchMovies(searchTerm)}} />
      </div>
      {
        movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => {
              return (<MovieCard key={movie.imdbID} movie={movie} />)
            })}
          </div>) :
          <div className="empty">
            <h2> No Movies Found </h2>
          </div>
      }
    </div>
  );
}

export default App


