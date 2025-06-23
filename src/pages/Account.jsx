// import { HiOutlineBars3 } from "react-icons/hi2";


// function Account() {
//   return (
//     <>
//       <div className="main mt-20 mx-auto w-[100%] sm:w-[85%]">
//         <div className="name-account flex justify-between">
//           <div className="flex sm:gap-3">
//             <p>Home</p>
//             <p>/</p>
//             <p>My Account</p>
//           </div>
//           <div>
//             <p>
//               Welcome! <span className="text-[#db4543]">Md Rimel</span>
//             </p>
//           </div>
//         </div>

//         <div className="mt-25 flex gap-[13rem]">
//           <div className="manage-account flex flex-col w-[25%]">
//             <p className="font-bold">Manage My Account</p>
//             <div className="px-8 mt-2 flex flex-col ">
//               <p className="text-[#db4543]">My Profile</p>
//               <p className="text-[#808080]">Address Book</p>
//               <p className="text-[#808080]">My Payment Options</p>
//             </div>

//             <p className="font-bold mt-8"> My Orders</p>
//             <div className="px-8 mt-2 flex flex-col ">
//               <p className="text-[#808080]">My Returns</p>
//               <p className="text-[#808080]">My Cancellations</p>
//             </div>
//             <p className="font-bold mt-8"> My Wishlist</p>
//           </div>

//           <div className="edit-profile shadow-md w-[45%]">
//             <div className=" mx-auto px-30 py-5">
//               <h1 className="text-[#db4543] text-md">Edit your Profile</h1>
//               <form>


//                 <div className="names mt-3 flex w-full gap-5">
//                   <div className="flex flex-col">
//                     <label>First Name </label>
//                        <input type='text' className="flex-1 bg-neutral-100 px-3 py-2 w-full" placeholder="Md" />
//                   </div>

//                   <div className="flex flex-col">
//                     <label>Last Name </label>
//                     <input type='text' className="flex-1 bg-neutral-100 px-3 py-2 w-full" placeholder="Rimel" />

//                   </div>
//                 </div>


//                 <div className="email-address mt-3 flex justify-between gap-5">
//                   <div className="flex flex-col">
//                     <label>Email </label>
                    
//                     <input type='text' className="flex-1 bg-neutral-100 px-3 py-2 w-full" placeholder="rimel1111@gmail.com" />

//                   </div>

//                   <div className="flex flex-col">
//                     <label>Address </label>
                  
//                     <input type='text' className="flex-1 bg-neutral-100 px-3 py-2 w-full" placeholder="Kingston, 5236, United State" />

//                   </div>
//                 </div>

//                 <div className="password mt-5 flex flex-col">
//                   <div className="flex flex-col gap-3">
//                     <label>Password Changes </label>
                
//                     <input type='text' className="flex-1 bg-neutral-100 px-3 py-2" placeholder="Current Password" />

                    
                   
//                     <input type='text' className="flex-1 bg-neutral-100 px-3 py-2" placeholder="New Password" />

//                     <input type='text' className="flex-1 bg-neutral-100 px-3 py-2" placeholder="Confirm Password" />

//                   </div>

//                 </div>

//                 <div className="submit-form flex gap-[5%] mt-[5%] items-center justify-end">
//                      <a href='#' >Cancel</a>
//                      <input className="bg-[#db4543] text-white px-6 py-2 cursor-pointer rounded-sm" type="submit" value="Save Changes" ></input>
//                 </div>

                
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Account;

import { HiOutlineBars3 } from "react-icons/hi2";
import { useState, useRef, useEffect } from "react";

function Account() {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowSidebar(false);
      }
    };
    if (showSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSidebar]);

  return (
    <>
      <div className="main mt-20 mx-auto w-[100%] sm:w-[85%] px-4">
        <div className="name-account flex justify-between items-center">
          <div className="flex sm:gap-3 text-sm text-[#808080]">
            <p>Home</p>
            <p>/</p>
            <p className="text-black">My Account</p>
          </div>
          <div className="hidden sm:block">
            <p>
              Welcome! <span className="text-[#db4543]">Md Rimel</span>
            </p>
          </div>
          <div className="sm:hidden cursor-pointer" onClick={() => setShowSidebar(true)}>
            <HiOutlineBars3 size={30} />
          </div>
        </div>

        <div className="relative mt-16 sm:flex gap-[8%]">
          {/* Sidebar Overlay */}
          {showSidebar && (
            <div className="fixed inset-0   z-40"></div> // bg-black
          )}

          {/* Sidebar */}
          <div
            ref={sidebarRef}
            className={`${
              showSidebar ? "block" : "hidden"
            } fixed top-0 left-0 w-3/5 h-full bg-white z-50 p-5 sm:static sm:block sm:w-[25%] sm:h-auto shadow-md`}
          >
            <p className="font-bold text-lg">Manage My Account</p>
            <div className="pl-3 mt-4 flex flex-col text-sm gap-2">
              <p className="text-[#db4543]">My Profile</p>
              <p className="text-[#808080]">Address Book</p>
              <p className="text-[#808080]">My Payment Options</p>
            </div>

            <p className="font-bold text-lg mt-8">My Orders</p>
            <div className="pl-3 mt-2 flex flex-col text-sm gap-2">
              <p className="text-[#808080]">My Returns</p>
              <p className="text-[#808080]">My Cancellations</p>
            </div>

            <p className="font-bold text-lg mt-8">My Wishlist</p>
          </div>

          {/* Form Section */}
          <div className="edit-profile w-full sm:w-[65%] bg-white shadow-md rounded-md p-6">
            <h1 className="text-[#db4543] text-lg font-semibold mb-4">Edit Your Profile</h1>
            <form className="flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-2">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="bg-neutral-100 px-3 py-2 rounded w-full"
                    placeholder="Md"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="bg-neutral-100 px-3 py-2 rounded w-full"
                    placeholder="Rimel"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-2">
                  <label>Email</label>
                  <input
                    type="text"
                    className="bg-neutral-100 px-3 py-2 rounded w-full"
                    placeholder="rimel1111@gmail.com"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label>Address</label>
                  <input
                    type="text"
                    className="bg-neutral-100 px-3 py-2 rounded w-full"
                    placeholder="Kingston, 5236, United State"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-semibold">Password Changes</label>
                <input
                  type="password"
                  className="bg-neutral-100 px-3 py-2 rounded"
                  placeholder="Current Password"
                />
                <input
                  type="password"
                  className="bg-neutral-100 px-3 py-2 rounded"
                  placeholder="New Password"
                />
                <input
                  type="password"
                  className="bg-neutral-100 px-3 py-2 rounded"
                  placeholder="Confirm New Password"
                />
              </div>

              <div className="flex justify-end items-center gap-4 mt-4">
                <a href="#" className="text-sm text-black">Cancel</a>
                <input
                  type="submit"
                  value="Save Changes"
                  className="bg-[#db4543] text-white px-6 py-2 rounded-sm cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;

