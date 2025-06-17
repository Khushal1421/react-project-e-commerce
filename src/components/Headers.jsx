import "../css-files/Headers.css";

import BlackHeaders from "./BlackHeaders";

import AccountDropDown from "./ui/AccountDropDown";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

import { useState } from "react";

function Headers() {
  const [show, setOnShow] = useState(false);
  const [search, setSearch] = useState(false);
  const [last, setLast] = useState(false);

  const handleClick = () => {
    setOnShow(!show);
  };

  const SideComponent = () => {
    return (
      <>
        <div
          className="lg:hidden flex items-center"
          onClick={() => setSearch(true)}
        >
          <BsThreeDotsVertical
            onClick={() => setLast(true)}
            className="lg:hidden"
          />
        </div>
      </>
    );
  };

  const SearchComponent = () => {
    return (
      <>
        <div
          className="lg:hidden flex items-center"
          onClick={() => setSearch(true)}
        >
          <HiMiniMagnifyingGlass size={20} />
        </div>
      </>
    );
  };
  return (
    <>
      <BlackHeaders />

      {/* Links Starts */}
      <nav className=" w-[100%] sm:w-[85%] mx-auto flex justify-between  gap-8 mt-12">
        <div className="hidden sm:block">
          <p id="exclusive" className="">
            Exclusive
          </p>
        </div>
        <div className="mx-auto sm:mx-0 ">
          <ul className="flex justify-center gap-5 sm:gap-5  md:gap-7   lg:gap-8 lg:p-0 links flex-wrap mt-[6px]  ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </div>

        <div className="hidden sm:flex gap-6   ">
          <div className="hidden lg:flex items-center gap-2 bg-neutral-200 px-2 py-1 rounded h-10 max-w-xs sm:max-w-sm md:max-w-md">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent focus:outline-none text-sm w-full"
            />
            <HiMiniMagnifyingGlass size={20} className="min-w-[20px]" />
          </div>

          <div className="hidden  lg:flex flex-wrap content-center gap-5 ">
            <div className="">
              <IoHeartOutline size={28} />
            </div>
            <div className="">
              <IoCartOutline size={28} />
            </div>
            <div
              className="hidden md:block bg-[#db4543] rounded-full p-0.5  "
              onClick={handleClick}
            >
              <FiUser size={25} />
              {show && (
                <div className="absolute mt-2 right-[8rem] z-1">
                  <AccountDropDown />
                </div>
              )}
            </div>
          </div>

          <SearchComponent />
          <SideComponent />
        </div>
      </nav>
    </>
  );
}

export default Headers;
