// import { FaArrowRightLong } from "react-icons/fa6";
// import { GoArrowRight } from "react-icons/go";

// function Phone(){
//     return(
//         <>

//         <div className="bg-black   text-white flex justify-between relative">
//             <div className="ml-[5rem] mt-[4rem] ">
//                 <div className="flex gap-5 flex-wrap w-[230px] ">
//                     <div>
//                       <img src="src/images/WhiteApple.png" alt="White Apple" />
//                     </div>
//                     <p className="flex flex-wrap content-center">iPhone 14 Series </p>
//                 </div>
//                 <div className="mt-6">
//                     <p className="text-4xl font-extrabold tracking-wider "> Up to 10% </p>
//                     <p className="text-4xl font-extrabold mt-2"> off Voucher</p>
//                 </div>
//                 <div>
//                     <div className="flex mt-[2rem] gap-3">
//                         <div>
//                           <p className=''>Shop Now</p>
//                           <hr className="border-" />
//                         </div>
//                         <div>
//                           <GoArrowRight size={24}/>
//                         </div>

//                     </div>
//                 </div>

//             </div>
//             <div className="mt-[1rem]">
//               <img src="src/images/hero_endframe__cvklg0xk3w6e_large 2.png" style={{width:'496px', height:'326px'}}width={'496px'} height={'352px'} alt="Phone" />
//             </div>

//             <div className="absolute ml-[27rem] mt-[20rem] flex gap-6">
//                 <div className="rounded-full bg-gray-500 h-[12px] w-[12px]" ></div>
//                 <div className="rounded-full bg-gray-500 h-[12px] w-[12px]" ></div>
//                 <div className="rounded-full bg-gray-500 h-[12px] w-[12px]" ></div>
//                 <div className="rounded-full bg-gray-500 h-[12px] w-[12px]" ></div>
//                 <div className="rounded-full bg-gray-500 h-[12px] w-[12px]" ></div>

//             </div>

//         </div>

//         </>
//     )
// }

// export default Phone;



import apple from '../images/WhiteApple.png';
import phone from '../images/hero_endframe__cvklg0xk3w6e_large 2.png'

import { FaArrowRightLong } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";

function Phone() {
  return (
    <>
      {/*Necessary to specify flex-row here */}
      <div className="bg-black h-full w-full  text-white flex flex-col-reverse  md:flex md:flex-row md:justify-around relative pb-10 md:pb-0">
        <div className="left-box  mx-auto md:mx-0 md:mt-[4rem] ">
          <div className="flex gap-0 md:gap-5 flex-wrap   ">
            <div className="hidden xl:block"> {/* hidden*/}
              <img src={apple} alt="White Apple" />
            </div>
            <p className="flex flex-wrap content-center">iPhone 14 Series </p>
          </div>
          <div className="  lg:block mt-6"> {/* hidden*/}
            <p className=" text-2xl xl:block xl:text-4xl font-extrabold tracking-wider ">
              {" "}
              Up to 10%{" "}
            </p>
            <p className=" text-2xl xl:block xl:text-4xl font-extrabold mt-2">
              {" "}
              off Voucher
            </p>
          </div>
          <div>
            <div className=" flex mt-[2rem] gap-3"> {/* hidden md:flex*/}
              <div>
                <p className="">Shop Now</p>
                <hr className="border-" />
              </div>
              <div>
                <GoArrowRight size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="md:pt-0">
          <img
            className="mx-auto   md:h-auto"
            src={phone}
            alt="Phone"
          />
        </div>

        
        <div className="absolute bottom-3 w-full flex justify-center gap-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="rounded-full bg-gray-500 h-[10px] w-[10px] hover:bg-white transition-all duration-300"
            ></div>
          ))}
        </div>
      </div>

      
    </>
  );
}

export default Phone;
