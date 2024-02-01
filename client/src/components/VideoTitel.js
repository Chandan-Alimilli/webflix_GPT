import React from "react";

const VideoTitel = ({ title, overview }) => {
  return (
    <div className="pt-[18%] px-10 absolute text-white bg-gradient-to-r from-black w-screen aspect-video  ">
      <h1
        className="font-bold   text-red-700
      hover:text-yellow-50 cursor-pointer text-5xl "
      >
        {title}
      </h1>
      <p
        className=" py-6 w-1/3
       transition-transform duration-300 transform hover:text-xl text-lg"
      >
        {overview}
      </p>
      <div className="">
        <button className="bg-white py-3 bg-opacity-80 rounded-lg mr-4 w-24 font-bold text-black hover:bg-opacity-45">
          ▷ Play
        </button>
        <button className="bg-gray-500  bg-opacity-50 py-3  mr-4 w-36 rounded-lg text-white hover:bg-opacity-45">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitel;
