import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { netflixLogo, userLogo } from "../utils/constant";
import { toggleGPTSearch } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleGptSearchClick = () => {
    dispatch(toggleGPTSearch());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    // The reason the Firebase onAuthStateChanged method still works is that, internally, it sets up its own listeners and manages them. When you call onAuthStateChanged, you're essentially telling Firebase to start listening for authentication state changes, and it handles the mechanics of registering the listener internally.
    // Here the onAuthStateChanged works automatically without calling.

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // user Signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // clean up function
    return () => unsubscribe();
  }, []);
  // bg-gradient-to-b from-black to-transparent
  return (
    <div className="w-full py-2 flex justify-between px-16 text-white bg-black">
      <img src={netflixLogo} alt="netflix" className="w-48" />
      {user && (
        <div className="flex items-center">
          <div className="">
            <button
              className="flex items-center text white mr-4 rounded-lg "
              onClick={handleGptSearchClick}
            >
              {" "}
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
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              GPT Search
            </button>
          </div>
          <p className="text-lg mr-2"> Hello {user?.displayName} !</p>
          <img src={userLogo} alt="user" className="w-12 h-12" />
          <button className="ml-2" onClick={handleSignOut}>
            {" "}
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
