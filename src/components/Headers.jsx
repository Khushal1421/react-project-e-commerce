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
import { Link } from "react-router-dom";

function Headers() {
  let [color, setColor] = useState("");
  let [newColor, setNewColor] = useState("");
  const [show, setOnShow] = useState(false);
  const [search, setSearch] = useState(false);
  const [last, setLast] = useState(false);

  const handleClick = () => {
    setOnShow(!show);
    if (!show) {
      setColor("bg-[#db4543]");
      setNewColor("white");
    } else {
      setColor("");
      setNewColor("");
    }
  };

  const SideComponent = () => {
    return (
      <>
        <div
          className="lg:hidden flex items-center"
          onClick={() => setLast(true)}
        >
          <BsThreeDotsVertical
            size={20}
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
  // console.log(search);
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
              <Link to="/">
                <p className="hover hover:underline cursor-default">Home</p>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <p className="hover hover:underline cursor-default">Contact</p>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <p className="hover hover:underline cursor-default">About</p>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <p className="hover hover:underline cursor-default">Sign Up</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden sm:flex gap-6   ">
          <div className="hidden lg:flex items-center gap-2 bg-neutral-200 px-2 py-1 rounded h-10 max-w-xs sm:max-w-sm md:max-w-md">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent focus:outline-none text-sm flex-1 w-full"
            />
            <HiMiniMagnifyingGlass size={20} className="min-w-[20px]" />
          </div>

          <div className="hidden  lg:flex flex-wrap content-center gap-5 ">
            <div className="">
              <Link to='/wishlist'><IoHeartOutline size={28} /></Link>
              
            </div>
            <div className="">
              <Link to='/cart'><IoCartOutline size={28} /></Link>
              
            </div>
            <div
              className={`hidden md:block ${color}  rounded-full p-0.5  `}
              onClick={handleClick}
            >
              <FiUser color={newColor} size={25} />
              {show && (
                <div className="absolute mt-2 right-[8rem] z-1">
                  <AccountDropDown />
                </div>
              )}
            </div>
          </div>

          {search && (
            <div className="z-10 fixed bg-white flex flex-col p-4 inset-0">
              {" "}
              {/*What is inset-0 */}
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  autoFocus
                  placeholder="What are you looking for?"
                  className="w-full px-3 py-2 border-b border-gray-300 text-lg outline-none"
                />

                <RxCross2
                  onClick={() => setSearch(false)}
                  className="cursor-pointer ml-3"
                />
              </div>
            </div>
          )}

          <SearchComponent />
          <SideComponent />
          {last && (
            <div className="absolute top-12 right-4 z-50 bg-white rounded-md shadow-md p-4 flex flex-col gap-4">
              <IoHeartOutline
                size={28}
                onClick={() => setLast(false)}
                className="cursor-pointer"
              />
              <IoCartOutline
                size={28}
                onClick={() => setLast(false)}
                className="cursor-pointer"
              />
              <FiUser
                size={28}
                onClick={() => setLast(false)}
                className="cursor-pointer"
              />
            </div>
          )}
        </div>
      </nav>

      <hr className="absolute w-full border-[#b3b3b3]  mt-[1.4rem]"></hr>
    </>
  );
}

export default Headers;
