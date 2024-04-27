import React from "react";
import { posterURL } from "../utils/constant";

const MovieCard = ({ poster, title }) => {
  let updatedTitle = title.length > 12 ? title.substring(0, 16) + ".." : title;
  return (
    <div className="w-[200px] pr-4 pb-4 cursor-pointer">
      {<img src={posterURL + poster} alt="movie poster" />}

      <p className="py-2 text-lg font-semibold"> {updatedTitle}</p>
    </div>
  );
};

export default MovieCard;
