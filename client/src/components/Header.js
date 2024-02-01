import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { USER_IMG, Netflix_logo } from "../utils/constants";
import { toggelGptSearchView } from "../utils/GPTslice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // const gpt = useSelector((store) => store.gpt);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // User is signed in
        const { uid, email, displayName } = authUser;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleGPTsrch = () => {
    dispatch(toggelGptSearchView());
  };

  return (
    <div className="px-6 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between absolute">
      <img className="w-44 hover:w-48" src={Netflix_logo} alt="logo" />

      {user && (
        <div className="flex p-2 mt-2">
          <button
            className="py-2 px-4 m-3 bg-purple-400 rounded-lg bg-opacity-75  text-slate-100 hover:cursor-pointer"
            onClick={handleGPTsrch}
          >
            Search GPT
          </button>

          <img
            className="w-12 h-12 mt-1 p-1"
            src={USER_IMG}
            alt="user profile"
          />
          <button
            className="font-bold text-white py-2 mt-1"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
