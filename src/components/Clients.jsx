import React from "react";
import clientone from "/public/assets/client1.png";
import clienttwo from "/public/assets/client2.png";
import clientthree from "/public/assets/client3.png";
import Carousel from "react-grid-carousel";

const Clients = () => {
  return (
    <div className="container pb-28 px-6 md:px-0 m-auto">
      <h2 className="text-white text-4xl text-center pb-20">
        What says our happy Clients
      </h2>
      <Carousel
        cols={3}
        rows={1}
        gap={12}
        loop={true}
        autoplay={3000}
        responsiveLayout={[
          {
            breakpoint: 1200,
            cols: 3,
          },
          {
            breakpoint: 990,
            cols: 2,
          },
        ]}
        mobileBreakpoint={670}
      >
        <Carousel.Item>
          <div className="border p-6 border-zinc-700 rounded-xl">
            <img src={clientone} alt="" />
            <h3 className="text-white text-xl pt-4">Jane Cooper</h3>
            <p className="text-white pb-3">Ceo of Hunt</p>
            <p className="text-zinc-500">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className="bg-amber-300 py-2 px-4 my-4 rounded-full">
              Read More
            </button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="border p-6 border-zinc-700 rounded-xl">
            <img src={clienttwo} alt="" />
            <h3 className="text-white text-xl pt-4">Devon Lane</h3>
            <p className="text-white pb-3">Ceo of Hunt</p>
            <p className="text-zinc-500">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className="bg-amber-300 py-2 px-4 my-4 rounded-full">
              Read More
            </button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="border p-6 border-zinc-700 rounded-xl">
            <img src={clientthree} alt="" />
            <h3 className="text-white text-xl pt-4">Robert Fox</h3>
            <p className="text-white pb-3">Ceo of Hunt</p>
            <p className="text-zinc-500">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className="bg-amber-300 py-2 px-4 my-4 rounded-full">
              Read More
            </button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="border p-6 border-zinc-700 rounded-xl">
            <img src={clientone} alt="" />
            <h3 className="text-white text-xl pt-4">Jane Cooper</h3>
            <p className="text-white pb-3">Ceo of Hunt</p>
            <p className="text-zinc-500">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className="bg-amber-300 py-2 px-4 my-4 rounded-full">
              Read More
            </button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="border p-6 border-zinc-700 rounded-xl">
            <img src={clienttwo} alt="" />
            <h3 className="text-white text-xl pt-4">Devon Lane</h3>
            <p className="text-white pb-3">Ceo of Hunt</p>
            <p className="text-zinc-500">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className="bg-amber-300 py-2 px-4 my-4 rounded-full">
              Read More
            </button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="border p-6 border-zinc-700 rounded-xl">
            <img src={clientone} alt="" />
            <h3 className="text-white text-xl pt-4">Jane Cooper</h3>
            <p className="text-white pb-3">Ceo of Hunt</p>
            <p className="text-zinc-500">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className="bg-amber-300 py-2 px-4 my-4 rounded-full">
              Read More
            </button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="border p-6 border-zinc-700 rounded-xl">
            <img src={clienttwo} alt="" />
            <h3 className="text-white text-xl pt-4">Devon Lane</h3>
            <p className="text-white pb-3">Ceo of Hunt</p>
            <p className="text-zinc-500">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className="bg-amber-300 py-2 px-4 my-4 rounded-full">
              Read More
            </button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="border p-6 border-zinc-700 rounded-xl">
            <img src={clientthree} alt="" />
            <h3 className="text-white text-xl pt-4">Robert Fox</h3>
            <p className="text-white pb-3">Ceo of Hunt</p>
            <p className="text-zinc-500">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className="bg-amber-300 py-2 px-4 my-4 rounded-full">
              Read More
            </button>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Clients;
