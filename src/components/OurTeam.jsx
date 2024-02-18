import React from "react";
import Ellipseone from "./../assets/Ellipse1.png";
import Ellipsetwo from "./../assets/Ellipse2.png";
import Ellipsethree from "./../assets/Ellipse3.png";
import Ellipsefour from "./../assets/Ellipse4.png";
import Ellipsefive from "./../assets/Ellipse5.png";
import Ellipsesix from "./../assets/Ellipse6.png";

const OurTeam = () => {
  return (
    <div className="container pb-28 px-6 md:px-0 m-auto">
      <h2 className="text-white text-4xl md:text-center pb-20">Our Team</h2>
      <div className=" flex flex-col md:flex-row items-center justify-between ">
        <div className="m-2 flex p-6 w-full hover:bg-amber-300 rounded-xl">
          <img src={Ellipseone} alt="" className="mr-4" />
          <div>
            <h3 className="text-white text-xl pt-2">Danial Def</h3>
            <p className="text-zinc-500">301 Cases</p>
          </div>
        </div>
        <div className="m-2 flex p-6 w-full hover:bg-amber-300 rounded-xl">
          <img src={Ellipsetwo} alt="" className="mr-4" />
          <div>
            <h3 className="text-white text-xl pt-2">Sanfole</h3>
            <p className="text-zinc-500">301 Cases</p>
          </div>
        </div>
        <div className="m-2 flex p-6 w-full hover:bg-amber-300 rounded-xl">
          <img src={Ellipsethree} alt="" className="mr-4" />
          <div>
            <h3 className="text-white text-xl pt-2">Cesforila</h3>
            <p className="text-zinc-500">301 Cases</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row items-center justify-between ">
        <div className="m-2 flex p-6 w-full hover:bg-amber-300 rounded-xl">
          <img src={Ellipsefour} alt="" className="mr-4" />
          <div>
            <h3 className="text-white text-xl pt-2">Colleen</h3>
            <p className="text-zinc-500">301 Cases</p>
          </div>
        </div>
        <div className="m-2 flex p-6 w-full hover:bg-amber-300 rounded-xl">
          <img src={Ellipsefive} alt="" className="mr-4" />
          <div>
            <h3 className="text-white text-xl pt-2">Haldone</h3>
            <p className="text-zinc-500">301 Cases</p>
          </div>
        </div>
        <div className="m-2 flex p-6 w-full hover:bg-amber-300 rounded-xl">
          <img src={Ellipsesix} alt="" className="mr-4" />
          <div>
            <h3 className="text-white text-xl pt-2">Nik Jeo</h3>
            <p className="text-zinc-500">301 Cases</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
