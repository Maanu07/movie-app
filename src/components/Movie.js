import React, { useState } from "react";

const Movie = ({ movie, addToFav }) => {
  const posterURL = "https://image.tmdb.org/t/p/w500";
  const [heart, showHeart] = useState(false);
  const { poster_path } = movie;

  const handleClick = () => {
    showHeart(true);
    addToFav(movie);
    setTimeout(() => {
      showHeart(false);
    }, 800);
  };
  return (
    <>
      {poster_path && (
        <div className='movie-card'>
          <img src={`${posterURL}${poster_path}`} alt='poster' />
          <button onClick={handleClick}>
            <i class='fas fa-heart'></i>
          </button>
          {heart && (
            <p>
              <i class='fas fa-heart fa-3x'></i>
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default Movie;
