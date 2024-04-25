import React, { useEffect } from "react";
import { API_Options } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useTrailerVideo = (movieid) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieid +
        "/videos?language=en-US",
      API_Options
    );
    const json = await data.json();

    let trailer = json.results.filter((video) => video.type === "Trailer")[0];
    if (!trailer) {
      if (json.results.length > 0) {
        trailer = json.results[0];
      }
    }
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useTrailerVideo;
