import React from "react";
import logo from "./../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-zinc-950">
      <div className="container flex flex-col md:flex-row items-center justify-around md:justify-between py-8 m-auto">
        <img src={logo} alt="" />
        <nav className="text-center py-4">
          <a href="" className="text-white px-8">
            Home
          </a>
          <a href="" className="text-white px-8">
            Attorneys
          </a>
          <a href="" className="text-white px-8">
            Practice Areas
          </a>
          <a href="" className="text-white px-8">
            About Us
          </a>
        </nav>
        <div className="text-zinc-500 px-4 py-2">
          © 2020 Acme. All right reserved.
        </div>
      </div>
      e
    </div>
  );
};

export default Footer;
