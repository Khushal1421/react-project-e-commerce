import { FiUser } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { BsBox2 } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import { TiStarOutline } from "react-icons/ti";
import { TbLogout2 } from "react-icons/tb";

// w-56 rounded-lg shadow-lg bg-gradient-to-br from-pink-300 via-purple-400 to-black text-white p-4 space-y-3 (with div)

const AccountDropDown = () => {
    return (
      <div className="w-56 rounded-lg shadow-lg bg-gradient-to-l from-[#8b8b8b] to-[#a7a2a8] text-white p-4 space-y-3">
        <MenuItem icon={<LuUser />} label="Manage My Account" />
        <MenuItem icon={<BsBox2 />} label="My Order" />
        <MenuItem icon={<RxCrossCircled />} label="My Cancellations" />
        <MenuItem icon={<TiStarOutline  />} label="My Reviews" />
        <MenuItem icon={<TbLogout2 />} label="Logout" />
      </div>
    );
  };
  
  const MenuItem = ({ icon, label }) => (
    <div className="flex items-center space-x-3 cursor-pointer hover:text-gray-200 transition">
      <span className="text-xl">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
  
  export default AccountDropDown;
  
  
  
  
  
  
  
  
  
  