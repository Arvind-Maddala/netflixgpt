import React from "react";

const GptSearchBar = () => {
  return (
    <div className="bg-black w-full h-40 flex justify-center items-center">
      <form className="flex w-2/4">
        <input
          className="w-full outline-none text-black p-2 rounded-lg"
          type="text"
          placeholder="what would you like to watch today?"
        />
        <button className="bg-red-700 px-6 py-2 rounded-lg ml-4 ">
          {" "}
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
