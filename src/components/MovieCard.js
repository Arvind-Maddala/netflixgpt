import React from "react";
import { posterURL } from "../utils/constant";

const MovieCard = ({ poster, title }) => {
  let updatedTitle = title.length > 12 ? title.substring(0, 18) + "..." : title;
  return (
    <div className="w-[200px] pr-4 pb-4">
      {<img src={posterURL + poster} alt="movie poster" />}

      <p> {updatedTitle}</p>
    </div>
  );
};

export default MovieCard;
