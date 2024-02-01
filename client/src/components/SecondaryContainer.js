import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  {
    /*
 movieList-popular
   - movieCards
  movieList - now playing
 */
  }
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-opacity-95 bg-black ">
      <div className=" -mt-52 relative z-20 px-8">
        <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
        <MovieList title={"Trending"} movies={movies.popular} />
        <MovieList title={"Recent Movies"} movies={movies.nowPlaying} />
        <MovieList title={"Poupular"} movies={movies.upcoming} />
        <MovieList title={"Up Comming"} movies={movies.nowPlaying} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
