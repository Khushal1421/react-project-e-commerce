import "../css-files/Header.css";
import { FaAngleDown } from "react-icons/fa6";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

import { PiMagnifyingGlassLight } from "react-icons/pi";

{
  /* <IoCartOutline />, <IoHeartOutline />, <PiMagnifyingGlassLight /> <HiMiniMagnifyingGlass />


 */
}

function Header() {
  return (
    <>
      {/* <div className=" bg-black  text-white flex flex-wrap 
          content-center h-[30px] 
          ">

             <div className="flex flex-row justify-evenly w-full ">

                 <div className="invisible"></div>

                 <div className="flex justify-center gap-5">
                     <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                     <span className="underline">ShopNow</span>
                 </div>

                 <div>
                 English
                 </div>
             </div>

          </div> */}

      <div className="top-box">
        <div className="middle-box ">
          <div></div>

          <div className="content-box">
            <span>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <span className="underline">ShopNow</span>
          </div>

          <div className="english">
            English
            <FaAngleDown />
          </div>
        </div>
      </div>

      {/* Below is Navbar */}

      {/* <div className="top-navbar">
        <div className="container">
          <div className="exclusive">
            <p>Exclusive</p>
          </div>

          <div className="links">
            <p>Home</p>
            <p>Contact</p>
            <p>About</p>
            <p>SignUp</p>
          </div>

          <div>
            <input type="text" placeholder="What are you looking for" />
          </div>
        </div>
      </div> */}
      <div className="top-navbar">
        <div className="container">
          <div className="exclusive poppins-bold">Exclusive</div>
          <div className="links poppins-regular">
            <p>Home</p>
            <p>Contact</p>
            <p>About</p>
            <p>Sign Up</p>
          </div>
          <div className="side-content">
            <div className="search-bar">
              <input type="text" placeholder="What are you looking for" />
              <HiMiniMagnifyingGlass size={30} />
            </div>
            <div className="side-icons">
            <div className="heart">
              <IoHeartOutline size={30} />
            </div>
            <div className="cart">
              <IoCartOutline size={30} />
            </div>
            <div className="person">
              <img src="src/logos/user.png" />
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

// import { ChevronDown } from 'lucide-react';

// export default function Header() {
//   return (
//     <div className="w-full bg-black text-white py-2 px-4">
//       <div className="flex justify-between items-center">
//         {/* Left empty space on smaller screens, content centered */}
//         <div className="hidden md:block w-32"></div>

//         {/* Center promotional text - responds to screen size */}
//         <div className="text-center mx-auto">
//           <p className="text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
//             <span className="">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
//             {/* <span className="xs:hidden">Summer Sale - OFF 50%!</span> */}
//             <span className="ml-2 font-semibold underline text-white cursor-pointer hover:text-gray-200">
//               ShopNow
//             </span>
//           </p>
//         </div>

//         {/* Language selector */}
//         <div className="flex items-center text-xs sm:text-sm md:text-base">
//           <span>English</span>
//           <ChevronDown size={16} className="ml-1" />
//         </div>
//       </div>
//     </div>
//   );
// }
