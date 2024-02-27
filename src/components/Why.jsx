import React from "react";
import gift from "/public/assets/gift.png";

const Why = () => {
  return (
    <div className="container pb-28 px-6 md:px-0 m-auto">
      <h2 className="text-white text-4xl md:text-center pb-20">
        Why Choose us?
      </h2>
      <div className=" flex flex-col md:flex-row items-center justify-between ">
        <div className="border p-6 border-zinc-700 rounded-xl">
          <img src={gift} alt="" />
          <h3 className="text-white text-xl py-4">98% Success Rate</h3>
          <p className="text-zinc-500">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className="bg-amber-300 py-2 px-4 my-4 rounded-full">
            Read More
          </button>
        </div>
        <div className="border p-6 md:mx-6 bg-zinc-700 my-6 border-zinc-700 rounded-xl">
          <img src={gift} alt="" />
          <h3 className="text-white text-xl py-4">98% Success Rate</h3>
          <p className="text-zinc-500">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className="bg-amber-300 py-2 px-4 my-4 rounded-full">
            Read More
          </button>
        </div>
        <div className="border p-6 border-zinc-700 rounded-xl">
          <img src={gift} alt="" />
          <h3 className="text-white text-xl py-4">98% Success Rate</h3>
          <p className="text-zinc-500">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className="bg-amber-300 py-2 px-4 my-4 rounded-full">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Why;
