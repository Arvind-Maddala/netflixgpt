import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
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
  return (
    <div className="absolute z-10 py-2 w-screen flex justify-between px-10">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix"
        className="w-48"
      />
      {user && (
        <div className="flex items-center">
          <p className="text-lg mr-2">Welcome {user?.displayName} !</p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8eIW8UaYc7fD5QyVa_Z39U07KJzGel20cRbqsURLvQ&s"
            alt="user"
            className="w-12 h-12"
          />
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
