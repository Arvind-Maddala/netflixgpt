import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" ml-12 text-white z-10">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg ">{overview}</p>
      <div>
        <button className="bg-white text-black px-12 py-4 rounded-lg mr-2 cursor-pointer">
          <div className="flex items-center  font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2"> Play</span>
          </div>
        </button>
        <button className="bg-black px-12 py-4 rounded-lg cursor-pointer text-white opacity-75">
          <div className="flex items-center font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
            <span className="ml-2"> More Info</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
