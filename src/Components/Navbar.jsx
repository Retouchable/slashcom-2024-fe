import React from "react";
import Logo from "../images/Logo.svg";
import Treest from "../images/Treest.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex gap-8">
        <img className=" w-12 ml-28 mt-6" src={Logo}></img>
        <img className="w-12  mt-6" src={Treest}></img>
        <ol className="flex pt-8 pl-80 gap-20 text-xl text-green-600">
          <li>news</li>
          <li>about</li>
          <li>menu</li>
        </ol>
        <Link to= "/register"><p className="pt-8 pl-80 text-xl text-green-600">Daftar</p></Link>
        <div className="border-2 border-green-500 w-24 h-14 text-center rounded-lg mt-4">
          <Link to="/login">
          <button className=" pt-3 text-xl text-green-600 font-semibold ">masuk</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
