import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRated);
  const upComingMovies = useSelector((state) => state.movies.upcoming);
  return (
    <div className=" bg-black pl-12 -mt-52">
      <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
      <MovieList title={"Trending"} movies={popularMovies} />
      <MovieList title={"Popular"} movies={topRatedMovies} />
      <MovieList title={"Top IMDB"} movies={upComingMovies} />
    </div>
  );
};

export default SecondaryContainer;
