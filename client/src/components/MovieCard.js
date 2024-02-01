import React from "react";
import { CDN_IMG } from "../utils/constants";

const MovieCard = ({ img }) => {
  const src = CDN_IMG + img;
  // console.log(src);

  return (
    <div className="w-48 pr-3 rounded-lg">
      <img className="rounded-lg" alt="IMG" src={src} />
    </div>
  );
};

export default MovieCard;
