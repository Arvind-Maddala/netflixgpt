import { ytVideoURL } from "../utils/constant";
import { useSelector } from "react-redux";

import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBG = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo?.key);
  useTrailerVideo(movieId);

  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={
          ytVideoURL +
          `${trailer}` +
          "?&autoplay=1&controls=0&loop=1&rel=0&modestbranding=1"
        }
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBG;
