import { ytVideoURL } from "../utils/constant";
import { useSelector } from "react-redux";

import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBG = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo?.key);
  useTrailerVideo(movieId);

  return (
    <div>
      <iframe
        className="w-full aspect-video absolute top-0"
        src={ytVideoURL + `${trailer}` + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default VideoBG;
