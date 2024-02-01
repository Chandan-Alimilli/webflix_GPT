import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopular } from "../utils/movieSlice";

const usePopular = async () => {
  const dispatch = useDispatch();

  const getPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addPopular(json.results));
  };

  useEffect(() => {
    getPopular();
  }, []);
};

export default usePopular;
