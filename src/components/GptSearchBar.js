import React from "react";
import { lang } from "../utils/langConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const selectedLang = useSelector((state) => state.language.language);
  console.log(selectedLang);
  return (
    <div className=" flex justify-center items-center bg-black w-full p-6">
      <form className="flex w-full">
        <input
          className="w-full outline-none text-black px-4 py-2 rounded-lg shadow-2xl "
          type="text"
          placeholder={lang[selectedLang].placeHolderText}
        />
        <button className="bg-red-700 px-6 py-4 rounded-lg ml-4 w-[200px] ">
          {" "}
          {lang[selectedLang].searchText}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
