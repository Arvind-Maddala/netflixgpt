import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovies from "./GptMovies";

const GptSearch = () => {
  return (
    <div className="text-white">
      <GptSearchBar />
      <GptMovies />
    </div>
  );
};

export default GptSearch;
