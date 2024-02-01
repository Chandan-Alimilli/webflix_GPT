import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const Videobg = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useTrailer(movieId);

  const video =
    trailerVideo && trailerVideo[0]?.key
      ? `https://www.youtube.com/embed/${trailerVideo[0].key}?autoplay=1&mute=1`
      : null;

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Videobg;
