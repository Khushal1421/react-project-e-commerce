import '../css-files/Headers.css';
import { FaAngleDown } from "react-icons/fa6";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

import { HiMiniMagnifyingGlass } from "react-icons/hi2";


function Headers() {
  return (
    <>
      <div className="bg-black w-full text-white flex flex-wrap justify-center content-center ">
        <div className=" flex content-center w-[85%] justify-between mx-auto  ">
          <div className="invisible"></div>
          <div className="flex gap-3 ">
            <p className="">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <p className="hidden sm:block underline">Shop Now</p>
          </div>
          <div className="hidden md:block">
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px", // optional: space between text and arrow
              }}
            >
              English <FaAngleDown />
            </p>
          </div>
        </div>
      </div>

       {/* Links Starts */}
      <nav className="border-1 w-[100%] sm:w-[85%] mx-auto flex   justify-between  gap-12 mt-12">
        <div className="hidden sm:block">
          <p id='exclusive' className="">Exclusive</p>
        </div>
        <div className="">
          <ul className="flex gap-15 links flex-wrap mt-[6px]  ">
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Sign Up</a></li>
          </ul>
        </div>

        <div className="flex gap-6  ">
          <div className=" lg:bg-neutral-200  flex flex-wrap content-center gap-3  ">
            <input type="text" placeholder="What are you looking for?" className="hidden lg:block focus:outline-none focus:ring-2 focus:ring-gray-300" />
            <HiMiniMagnifyingGlass size={30} className="" />
          </div>

          <div className="flex border-1 border-red-600 flex-wrap content-center gap-5">
            <div className="">
              <IoHeartOutline size={30} />
            </div>
            <div className="">
              <IoCartOutline size={30} />
            </div>
            <div className="hidden md:block">
              <FiUser size={30} />
            </div>
          </div>

        </div>

      </nav>
    </>
  );
}

export default Headers;
