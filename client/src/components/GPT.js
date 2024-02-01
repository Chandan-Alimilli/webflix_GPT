import React from "react";
import GptSB from "./GptSB";
import GptMS from "./GptMS";
import { COVER_IMG } from "../utils/constants";

const GPT = () => {
  return (
    <div className="bg-black bg-opacity-55">
      <img className=" absolute -z-10 " src={COVER_IMG} alt="background_img" />
      <GptSB />
      <GptMS />
    </div>
  );
};

export default GPT;
