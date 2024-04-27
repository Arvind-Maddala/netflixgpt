import { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <>
      <div className="relative">
        <div className="absolute z-100 w-full">
          <Header />
        </div>
        <div className=" w-full">
          <MainContainer />
        </div>
        <div>
          <SecondaryContainer />
        </div>
      </div>
    </>
  );
};

export default Browse;
