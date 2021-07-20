import React from "react";
import Movie from "./Movie";
import FavMovies from "./FavMovies";
import { Category } from "./Category";

const MovieList = ({ movies, addToFav, favMovies, removeAsFav }) => {
  return (
    <div className='container'>
      {favMovies.length > 0 && (
        <>
          <Category category='Favourite Movies' />
          {
            <div className='movie-container'>
              {favMovies.map((movie) => (
                <FavMovies movie={movie} removeAsFav={removeAsFav} />
              ))}
            </div>
          }
        </>
      )}
      <Category category='Popular Movies' />
      <div className='movie-container'>
        {movies.map((movie) => (
          <>
            {movie.Poster !== "N/A" && (
              <Movie movie={movie} addToFav={addToFav} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
