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
import { LoginBG } from "../utils/constant";

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
          <div className="w-full absolute top-24">
            <img src={LoginBG} alt="background" />
            <div className="absolute top-[10%]   left-[13%] w-2/3">
              <GptSearch />
            </div>
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
