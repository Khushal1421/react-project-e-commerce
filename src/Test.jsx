import { useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

function HeaderMenu() {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(true);
    setShowMenu(false);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    setShowSearch(false);
  };

  const handleClose = () => {
    setShowSearch(false);
    setShowMenu(false);
  };

  return (
    <>
      {/* Large screen view (>=1024px) */}
      <div className="hidden lg:flex gap-6 items-center">
        {/* Search bar */}
        <div className="flex items-center gap-2 bg-neutral-200 px-2 py-1 rounded h-10 max-w-md">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent focus:outline-none text-sm w-full"
          />
          <HiMiniMagnifyingGlass size={20} />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <IoHeartOutline size={28} />
          <IoCartOutline size={28} />
          <div className="bg-[#db4543] rounded-full p-1 cursor-pointer" onClick={() => setShowAccount(!showAccount)}>
            <FiUser size={25} />
          </div>
        </div>
      </div>

      {/* Small screen view (<1024px) */}
      <div className="flex lg:hidden gap-4 items-center">
        <HiMiniMagnifyingGlass size={22} className="cursor-pointer" onClick={handleSearchClick} />
        <BsThreeDots size={22} className="cursor-pointer" onClick={handleMenuClick} />
      </div>

      {/* Full screen search overlay */}
      {showSearch && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-4">
          <div className="flex justify-between items-center">
            <input
              type="text"
              autoFocus
              placeholder="What are you looking for?"
              className="w-full px-3 py-2 border-b border-gray-300 text-lg outline-none"
            />
            <RxCross2 size={28} onClick={handleClose} className="cursor-pointer ml-3" />
          </div>
        </div>
      )}

      {/* Dropdown for icons */}
      {showMenu && (
        <div className="absolute top-12 right-4 z-50 bg-white rounded-md shadow-md p-4 flex flex-col gap-4">
          <IoHeartOutline size={28} onClick={handleClose} className="cursor-pointer" />
          <IoCartOutline size={28} onClick={handleClose} className="cursor-pointer" />
          <FiUser size={28} onClick={handleClose} className="cursor-pointer" />
        </div>
      )}

      {/* Optional: Account dropdown */}
      {showAccount && (
        <div className="absolute top-14 right-16 z-50">
          <AccountDropDown />
        </div>
      )}
    </>
  );
}

export default HeaderMenu;
