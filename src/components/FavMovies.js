import React from "react";

const FavMovies = ({ movie, removeAsFav }) => {
  const posterURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className='movie-card'>
      <img src={`${posterURL}${movie.poster_path}`} alt='poster' />
      <button onClick={() => removeAsFav(movie.id)}>
        <i class='fas fa-minus-circle'></i>
      </button>
    </div>
  );
};

export default FavMovies;
