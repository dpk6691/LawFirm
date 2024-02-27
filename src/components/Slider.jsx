import React from "react";
import banner from "/public/assets/banner.png";
import input from "/public/assets/input.png";

const Slider = () => {
  return (
    <div className="bg-zinc-950">
      <div className="flex px-6 md:px-0 flex-col md:flex-row container items-center pt-5 pb-28 m-auto">
        <div>
          <h1 className="text-6xl text-white">
            You don’t have to <br />
            <span className="font-bold">Fight them Alone</span>.
          </h1>
          <p className="text-zinc-600 text-l pt-9 pr-9">
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
          <div className="flex items-center mt-9 bg-zinc-800 border-4 border-zinc-800 w-fit rounded-full">
            <img src={input} className="w-5 mx-4 h-fit" alt="" />
            <input
              className="bg-transparent text-white"
              type="text"
              placeholder="Enter your eamil address"
            />
            <button className="bg-amber-300 p-4 rounded-full ml-7">
              Let’s Talk
            </button>
          </div>
        </div>
        <div>
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
