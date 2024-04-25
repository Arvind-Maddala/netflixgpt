import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LoginBG } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const dispatch = useDispatch();

  const handleBtnClick = () => {
    const message = checkValidData(
      emailRef?.current?.value,
      passwordRef?.current?.value
    );

    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passwordRef?.current?.value
      )
        .then(() => {
          // update display name
          updateProfile(auth.currentUser, {
            displayName: nameRef?.current?.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign In Logic

      signInWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passwordRef?.current?.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="absolute">
        <div>
          <img
            alt=""
            aria-hidden="true"
            data-uia="nmhp-card-hero+background+image"
            src={LoginBG}
            className="h-screen object-cover w-screen"
          />
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <p
            className={`absolute text-center ${
              isSignInForm ? "bottom-8" : "bottom-1"
            } left-0 right-0 mx-auto z-100 text-white shadow-2xl`}
          >
            {" "}
            Made with ❤️ by Aravind Maddala
          </p>
        </div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-2/6 absolute mx-auto right-0 left-0 my-24 p-12 bg-black text-white bg-opacity-50"
      >
        <h2 className="text-3xl mb-5 font-bold">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </h2>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full rounded-sm bg-transparent border border-gray-300"
            ref={nameRef}
          />
        )}
        <input
          type="email"
          placeholder="Email address"
          className="p-4 my-4 w-full rounded-sm bg-transparent border border-gray-300"
          ref={emailRef}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-sm bg-transparent border border-gray-300"
          ref={passwordRef}
        />
        <p className="text-red-600 font-semibold"> {errorMessage}</p>
        <button
          onClick={handleBtnClick}
          className="p-4 bg-red-700 w-full my-4 font-semibold rounded-sm text-center"
        >
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </button>
        <button className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <p className="font-semibold">
              {" "}
              <span className="text-zinc-400">New to Netflix?</span> Sign up
              Now.
            </p>
          ) : (
            <p className="font-semibold">
              {" "}
              <span className="text-zinc-500 mr-1">
                Already registered?{" "}
              </span>{" "}
              Sign in Now.
            </p>
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
