import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";

function App() {
  const tmdbAPI = "3cf311f3657f655a386cc6563171a1e2";
  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState([]);

  useEffect(async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbAPI}&language=en-US&page=1`
    );
    const result = await res.json();
    setMovies(result.results);

    //setting fav movies when user enter the app using local storage
    if (localStorage.getItem("movies") !== null) {
      let storedMovies = JSON.parse(localStorage.getItem("movies"));
      setFavMovies(storedMovies);
    }
  }, []);

  //saving to local storage function
  const updateLocalStorage = (myFavMovies) => {
    localStorage.setItem("movies", JSON.stringify(myFavMovies));
  };

  //get the searched movie
  const getMovie = async (title) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${tmdbAPI}&language=en-US&query=${title}`
    );
    const result = await res.json();
    if (result) {
      setMovies(result.results);
    }
  };

  //add to fav handling
  const addToFav = (movie) => {
    //checking if movie already added to fav
    const existInFav = favMovies.filter((item) => item.id === movie.id);
    if (existInFav.length === 0) {
      const myFavMovies = [...favMovies, movie];
      updateLocalStorage(myFavMovies);
      setFavMovies(myFavMovies);
    }
  };

  //remove from fav
  const removeAsFav = (id) => {
    let storedMovies = JSON.parse(localStorage.getItem("movies"));
    console.log(storedMovies);
    storedMovies = storedMovies.filter((movie) => movie.id != id);
    setFavMovies(storedMovies);
    localStorage.setItem("movies", JSON.stringify(storedMovies));
  };

  return (
    <div className='App'>
      <Navbar getMovie={getMovie} />
      <MovieList
        movies={movies}
        addToFav={addToFav}
        favMovies={favMovies}
        removeAsFav={removeAsFav}
      />
    </div>
  );
}

export default App;
