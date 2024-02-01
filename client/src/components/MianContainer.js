// import React, { useSelector } from "react";
import Videobg from "./Videobg";
import VideoTitel from "./VideoTitel";
import { useSelector } from "react-redux";

const MianContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlaying);

  if (!movies) return;

  const randomIndex = Math.floor(Math.random() * 5);
  // console.log(randomIndex, "index");
  const mainMovie = movies[0];
  // console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitel title={original_title} overview={overview} />
      <Videobg movieId={id} />
    </div>
  );
};

export default MianContainer;
