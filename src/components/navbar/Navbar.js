import React from "react";
import { Link } from "react-router-dom";
import { House, UserRoundPlus } from "lucide-react";
import { stringData } from "../../data";

const Navbar = () => {
  return (
    <>
      <header className="w-full h-20 bg-blue-600 flex items-center justify-between px-6 text-white">
        <h1 className="text-xl font-bold capitalize">{stringData.title}</h1>
        <nav className="w-2/5">
          <ul className="w-full flex items-center justify-around">
            <Link to={"/"}>
              <li className="flex items-center gap-1">
                <House />
                {stringData.homePage}
              </li>
            </Link>
            <Link to={"/addUser"}>
              <li className="flex items-center gap-1">
                <UserRoundPlus />
                {stringData.adduserPage}
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
