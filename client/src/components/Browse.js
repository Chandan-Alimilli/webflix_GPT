import { useSelector } from "react-redux";
import useNowPlaying from "../hooks/useNowPlaying";
import usePopular from "../hooks/usePopular";
import useUpcoming from "../hooks/useUpcoming";
import GPT from "./GPT";
import Header from "./Header";
import MianContainer from "./MianContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGpt = useSelector((store) => store.GPT.showGpt);
  useNowPlaying();
  usePopular();
  useUpcoming();

  return (
    <div>
      <Header />
      {showGpt ? (
        <GPT />
      ) : (
        <>
          <MianContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
