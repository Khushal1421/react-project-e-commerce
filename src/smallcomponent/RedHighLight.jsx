import { FaMobileAlt, FaDesktop, FaCamera, FaGamepad, FaHeadphones } from "react-icons/fa";
import { CiCamera } from "react-icons/ci"; // Proper
import { PiHeadphonesLight } from "react-icons/pi"; // Not Proper
import { TbDeviceGamepad } from "react-icons/tb"; // Not Proper
import { TbDeviceWatchStats } from "react-icons/tb"; // Not very Proper
import { HiOutlineComputerDesktop } from "react-icons/hi2"; // Not Proper
// import { ImMobile } from "react-icons/im";
import { TfiMobile } from "react-icons/tfi";



import { MdWatch } from "react-icons/md";
import { useState } from "react";

const categories = [
  { label: "Phones", icon: <TfiMobile size={56} /> },
  { label: "Computers", icon: <HiOutlineComputerDesktop size={56} /> },
  { label: "SmartWatch", icon: <TbDeviceWatchStats size={56} /> },
  { label: "Camera", icon: <CiCamera size={56} /> },
  { label: "HeadPhones", icon: <PiHeadphonesLight size={56} /> },
  { label: "Gaming", icon: <TbDeviceGamepad size={56} /> },
];

const CategoryGrid = () => {
  const [active, setActive] = useState("");

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6  ">
      {categories.map((cat) => (
        <div
          key={cat.label}
          onClick={() => setActive(cat.label)}
          className={`flex flex-col items-center justify-center p-6 rounded-lg border cursor-pointer transition-colors duration-200
            ${active === cat.label ? "bg-red-500 text-white" : "bg-white text-black hover:bg-red-500 hover:text-white"}
            `}
        >
          <div className="mb-2">{cat.icon}</div>
          <p className="text-md mt-4 font-medium">{cat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
