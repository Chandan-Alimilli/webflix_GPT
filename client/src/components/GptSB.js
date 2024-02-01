import { API_OPTIONS } from "../utils/constants";
import OpenAI from "../utils/openAi";
import React, { useRef } from "react";

const GptSB = () => {
  const searchText = useRef();

  const srchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSrch = async () => {
    const gptQuery = `
        Recommend me movies similar to "${searchText.current.value}".
        Provide at least 5 recommendations. 
        Please format the suggestions with commas, like: "movie1, movie2, movie3, movie4, movie5".
      `;

    const gptResults = await OpenAI.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    // Display the results in the UI instead of logging to the console

    const gptMovies = gptResults.choices[0]?.message?.content.split(",");
    console.log(gptResults.choices[0]?.message?.content.split(","));

    const data = gptMovies.map((movie) => srchMovieTMDB(movie));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" bg-black bg-opacity-80 rounded-lg w-1/2 grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder="Search for today's watch list"
          className=" p-3 rounded-lg m-3 col-span-9 bg-slate-200 text-black"
        />

        <button
          className=" bg-red-700 text-white rounded-lg col-span-3 p-3 m-3"
          onClick={handleGptSrch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSB;
