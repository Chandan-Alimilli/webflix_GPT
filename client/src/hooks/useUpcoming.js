import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcoming } from "../utils/movieSlice";

const useUpcoming = async () => {
  const dispatch = useDispatch();

  const getUpcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addUpcoming(json.results));
  };

  useEffect(() => {
    getUpcoming();
  }, []);
};

export default useUpcoming;
