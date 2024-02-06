import React from "react";
import imgone from "./../assets/Rectangle2.png";
import imgtwo from "./../assets/Rectangle1.png";
import imgthree from "./../assets/Rectangle3.png";
import imgfour from "./../assets/Rectangle4.png";
import imgfive from "./../assets/Rectangle6.png";
import imgsix from "./../assets/Rectangle5.png";

const Area = () => {
  return (
    <div className="container pb-28 px-6 md:px-0 m-auto">
      <h2 className="text-white text-4xl text-center pb-20">
        Area of Practices
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="basis-3/6 md:basis-9/12 p-2 relative">
          <img
            className="w-full h-72 object-cover rounded-lg"
            src={imgone}
            alt=""
          />
          <p className="text-white z-50 top-3/4 inset-x-0 text-center absolute">
            BUSINESS LAW
          </p>
        </div>
        <div className="basis-3/6 md:basis-1/4 p-2 relative">
          <img
            className="w-full h-72 object-cover rounded-lg"
            src={imgtwo}
            alt=""
          />
          <p className="text-white z-50 top-3/4 inset-x-0 text-center absolute">
            Partnership LAW
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="basis-3/6 md:basis-1/4 p-2 relative">
          <img
            className="w-full h-72 object-cover rounded-lg"
            src={imgthree}
            alt=""
          />
          <p className="text-white z-50 top-3/4 inset-x-0 text-center absolute">
            REAL ESTATE LAW
          </p>
        </div>
        <div className="basis-3/6 md:basis-9/12 p-2 relative">
          <img
            className="w-full h-72 object-cover rounded-lg"
            src={imgfour}
            alt=""
          />
          <p className="text-white z-50 top-3/4 inset-x-0 text-center absolute">
            BUSINESS LAW
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="basis-3/6 md:basis-9/12 p-2 relative">
          <img
            className="w-full h-72 object-cover rounded-lg"
            src={imgfive}
            alt=""
          />
          <p className="text-white z-50 top-3/4 inset-x-0 text-center absolute">
            LANDLORD DISPUTES
          </p>
        </div>
        <div className="basis-3/6 md:basis-1/4 p-2 relative">
          <img
            className="w-full h-72 object-cover rounded-lg"
            src={imgsix}
            alt=""
          />
          <p className="text-white z-50 top-3/4 inset-x-0 text-center absolute">
            ELDER ABUSE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Area;
