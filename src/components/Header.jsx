import React from "react";
import logo from "/public/assets/logo.png";

const Header = () => {
  return (
    <div className="bg-zinc-950">
      <div className="container flex flex-col md:flex-row items-center justify-around md:justify-between py-8 m-auto">
        <img src={logo} alt="" />
        <nav className="py-4">
          <a href="" className="text-white px-4">
            Home
          </a>
          <a href="" className="text-white px-4">
            Attorneys
          </a>
          <a href="" className="text-white px-4">
            Practice Areas
          </a>
          <a href="" className="text-white px-4">
            About Us
          </a>
        </nav>
        <button className="text-white border-white border px-4 py-2">
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default Header;
