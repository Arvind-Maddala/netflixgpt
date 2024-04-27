import { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showSearchView = useSelector((store) => store.gpt.showSearch);
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
        {showSearchView ? (
          <div className="w-full absolute top-20">
            <GptSearch />
          </div>
        ) : (
          <>
            <div className=" w-full">
              <MainContainer />
            </div>
            <div>
              <SecondaryContainer />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Browse;
