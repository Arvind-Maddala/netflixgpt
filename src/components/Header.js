import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { netflixLogo, userLogo } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

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
  //
  return (
    <div className="absolute z-10 py-2 w-full flex justify-between px-16 text-white bg-gradient-to-b from-black to-transparent">
      <img src={netflixLogo} alt="netflix" className="w-48" />
      {user && (
        <div className="flex items-center">
          <p className="text-lg mr-2">Welcome {user?.displayName} !</p>
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
