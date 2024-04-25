import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24  text-white aspect-video absolute top-0 z-20 w-[800px]">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg ">{overview}</p>
      <div className="">
        <button className="bg-zinc-200 text-black px-12 py-4 rounded-lg mr-2">
          Play
        </button>
        <button className="bg-zinc-200 text-black px-12 py-4 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
