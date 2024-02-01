import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) {
    return <p>No movies available</p>;
  }

  return (
    <div className="py-2 px-5 ">
      <h1 className="text-white  text-2xl p-2">{title}</h1>

      <div className=" flex overflow-x-auto  overflow-hidden scroll-bar  ">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} img={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
