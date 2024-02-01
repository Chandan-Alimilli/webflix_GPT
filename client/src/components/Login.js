import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidDate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../utils/firebase";
import { COVER_IMG } from "../utils/constants";

const Login = () => {
  const [isSingIn, setIsSingIn] = useState(true);
  const [errmsg, setErrMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handelbutton = () => {
    const msg = checkValidDate(email.current.value, password.current.value);
    setErrMsg(msg);

    if (msg) return;

    if (!isSingIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          // const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggelSingIn = () => {
    setIsSingIn(!isSingIn);
  };

  return (
    <div>
      <Header />
      <div className="">
        <img className=" absolute  " src={COVER_IMG} alt="background_img" />

        <form
          className="bg-black absolute p-12  w-[23%] bg-opacity-80 my-32 mx-auto right-0 left-0 text-white rounded-2xl hover:bg-opacity-70 "
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="p-2 font-bold text-2xl">
            {isSingIn ? "Sing In" : "Sing Up"}
          </h1>

          {!isSingIn && (
            <input
              // ref={namee}
              className="p-3 my-4  w-full bg-gray-700 bg-opacity-80"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="p-3 my-4  w-full bg-gray-700 bg-opacity-80"
            type="text"
            placeholder="E-mail"
          />

          <input
            ref={password}
            className="p-3 my-4  w-full bg-gray-700 bg-opacity-80"
            type="password"
            placeholder="password"
          />
          <p className="text-lg  text-red-400 font-bold">{errmsg}</p>
          <button
            className=" bg-red-700 p-2  rounded-lg font-bold my-4 w-full"
            onClick={handelbutton}
          >
            {isSingIn ? "Sing In" : "Sing UP"}
          </button>

          <p className=" my-2 p-2 cursor-pointer" onClick={toggelSingIn}>
            {isSingIn
              ? "New to Netflix ? Sing up Now !"
              : " Already Registerd User? Sing Up Now ! "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
