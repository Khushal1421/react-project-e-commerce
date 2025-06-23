// import { IoHeartOutline } from "react-icons/io5";
// import { FaStar } from "react-icons/fa6";
// import { RiLoopLeftFill } from "react-icons/ri";
// import { TbTruckDelivery } from "react-icons/tb";

// import { ProductBox } from "../components/ui2/ProductBox";
// import { ProductBigBox } from "../components/ui2/ProductBigBox";
// import ProductCard from "../components/ui/ProductCard";
// import { ProductDetailImages } from "../data/info";
// import Count from "../smallcomponent/Count";

// import SizeCard from "../components/ui2/SizeCard";
// import { sizes } from "../data/info";

// import image5 from "../images3/image5.png";

// import {productDetail} from '../data/info';

// function ProductDetails() {
//   return (
//     <div className="main w-[100%] sm:w-[85%] mx-auto mt-[3rem]">
//       <div className="flex gap-2 sm:gap-4">
//         <p className="text-[#909090]">Account</p>
//         <p className="text-[#909090]">/</p>
//         <p className="text-[#909090]">Gaming</p>
//         <p className="text-[#909090]">/</p>
//         <p>Havic HV G-92 Gamepad</p>
//       </div>

//       <div className="mt-[5rem]">
//         <div className="upper-products flex flex-wrap gap-[5rem]">
//           <div className="images flex flex-wrap gap-7">
//             <div className="grid grid-cols-1 gap-3">
//               {ProductDetailImages.map((product, i) => (
//                 <ProductBox key={i} {...product} /> // why didn't image={product} worked here
//               ))}
//             </div>

//             <div className="h-full px-">
//               <ProductBigBox image={image5} />
//             </div>
//           </div>
//           <div className="image-description flex flex-col gap-5">
//             <div>
//               <h1 className="text-2xl font-bold">Havic HV G-92 GamePad</h1>
//             </div>
//             <div className="flex gap-4">
//               <div className="flex gap-3">
//                 <span>
//                   <FaStar style={{ color: "rgb(255, 172, 51)" }} size={20} />
//                 </span>
//                 <span>
//                   <FaStar style={{ color: "rgb(255, 172, 51)" }} size={20} />
//                 </span>
//                 <span>
//                   <FaStar style={{ color: "rgb(255, 172, 51)" }} size={20} />
//                 </span>
//                 <span>
//                   <FaStar style={{ color: "rgb(255, 172, 51)" }} size={20} />
//                 </span>
//                 {/* <span><GoStarFill style={{ color: "rgb(255, 172, 51)" }} size={20} /></span> IMP cuz it can work also */}
//                 <span>
//                   <FaStar style={{ fill: "rgb(191,191,191)" }} size={20} />
//                 </span>
//               </div>
//               <div className="text-[#808080]">
//                 <p>(150 Reviews)</p>
//               </div>
//               <div className="text-[#808080]">|</div>
//               <div className="text-[#66ffa2]">In Stock</div>
//             </div>
//             <div className="text-3xl">
//               <p>$192.00</p>
//             </div>
//             <div>
//               <p>
//                 PlayStation 5 Controller Skin High quality vinyl with air
//                 <br />
//                 channel adhesive for easy bubble free install & mess
//                 <br />
//                 free removal Pressure sensitive.
//               </p>
//             </div>
//             <hr className="mt-2" />

//             <div className="colours flex gap-5">
//               <p className="text-2xl">Colours:</p>
//               <div className="flex gap-2">
//                 <div className="flex items-center justify-center ">
//                   {" "}
//                   {/*h-screen look at it */}
//                   <div className="w-8 h-8 rounded-full border-4 border-black flex items-center justify-center">
//                     <div className="w-4 h-4 rounded-full bg-blue-300"></div>
//                   </div>
//                 </div>
//                 <div className="rounded-full w-8 h-8 bg-[#db4543]"></div>
//               </div>
//             </div>

//             <div className="flex gap-5">
//               <div>
//                 <p className="text-2xl">Size:</p>
//               </div>
//               <div className="flex gap-3">
//                 {sizes.map((size, i) => (
//                   <SizeCard key={i} child={size}></SizeCard> // look:- how to use Child Prop in this case
//                 ))}
//               </div>
//             </div>

//             <div className="count-buy-like flex gap-4">
//               <div>
//                 <Count />
//               </div>
//               <div className="bg-[#db4543] rounded-sm px-12 py-3 text-white">
//                 <p>Buy Now</p>
//               </div>
//               <div className="border-1 rounded-sm px-4 py-2">
//                 <IoHeartOutline size={30} />
//               </div>
//             </div>
//             <div className="mt-3 border-1 border-[#808080]">
//               <div className="pt-3 pl-2 flex gap-3 pr-7">
//                 <div className="flex items-center">
//                   <TbTruckDelivery size={40} />
//                 </div>
//                 <div className="loop ml-2 py-2 pb-4 flex flex-col gap-2">
//                   <p className="text-xl font-bold">Free Delivery</p>
//                   <p className="pb-2">
//                     Enter your postal code for Delivery Availability
//                   </p>
//                   <hr className="mt-[-12px]" />
//                 </div>
//               </div>
//               <div className="pt-3 pl-2 border-t-1 border-[#808080] flex gap-3 pr-7">
//                 <div className="flex items-center">
//                   <RiLoopLeftFill size={40} />
//                 </div>
//                 <div className="ml-2 py-2 flex flex-col gap-2">
//                   <p className="text-xl font-bold">Free Delivery</p>
//                   <p className="pb-3">
//                     Free 30 Days Delivery Returns.{" "}
//                     <span className="underline">Details</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-[10rem]">
//         <div className="redbox flex gap-[5px] content-center">
//           <div className="w-[20px] h-[40px] bg-[#DB4543] rounded-sm"></div>
//           <div className="ml-3 flex flex-wrap content-center">
//             <p className="text-[#DB4543] font-bold ">Related Items</p>
//           </div>
//         </div>

//         <div className="products">
//          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
//             {productDetail.map((product, index) => (
//               <ProductCard key={index} {...product} />
//             ))}
//           </div>
//         </div>


//       </div>
//     </div>
//   );
// }

// export default ProductDetails;

import { IoHeartOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { RiLoopLeftFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

import { ProductBox } from "../components/ui2/ProductBox";
import { ProductBigBox } from "../components/ui2/ProductBigBox";
import ProductCard from "../components/ui/ProductCard";
import { ProductDetailImages } from "../data/info";
import Count from "../smallcomponent/Count";

import SizeCard from "../components/ui2/SizeCard";
import { sizes } from "../data/info";

import image5 from "../images3/image5.png";

import {productDetail} from '../data/info';

function ProductDetails() {
  return (
    <div className="main w-[100%] sm:w-[85%] mx-auto mt-[3rem]">
      <div className="flex gap-2 sm:gap-4">
        <p className="text-[#909090]">Account</p>
        <p className="text-[#909090]">/</p>
        <p className="text-[#909090]">Gaming</p>
        <p className="text-[#909090]">/</p>
        <p>Havic HV G-92 Gamepad</p>
      </div>

      <div className="mt-[5rem]">
        <div className="upper-products grid grid-cols-1 lg:grid-cols-2 gap-6"> {/*gap-10 */}
          <div className="images flex flex-col sm:flex-row gap-6">
            <div className="grid grid-cols-4 sm:grid-cols-1 gap-3 order-2 sm:order-1 px-4 sm:px-0">
              {ProductDetailImages.map((product, i) => (
                <ProductBox key={i} {...product} /> // why didn't image={product} worked here
              ))}
            </div>

            <div className="flex-1 px-4 sm:px-0 order-1 sm:order-2">
              <ProductBigBox image={image5} />
            </div>
          </div>
          <div className="image-description flex flex-col gap-5 mt-10 lg:mt-0 px-4"> {/*mt-10 lg:mt-0 px-2 extra added here */}
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Havic HV G-92 GamePad</h1> {/*text-xl sm:text-2xl lg:text-3xl font-bold */}
            </div>
            <div className="flex gap-4">
              <div className="flex gap-3">
                <span>
                  <FaStar style={{ color: "rgb(255, 172, 51)" }} size={20} />
                </span>
                <span>
                  <FaStar style={{ color: "rgb(255, 172, 51)" }} size={20} />
                </span>
                <span>
                  <FaStar style={{ color: "rgb(255, 172, 51)" }} size={20} />
                </span>
                <span>
                  <FaStar style={{ color: "rgb(255, 172, 51)" }} size={20} />
                </span>
                {/* <span><GoStarFill style={{ color: "rgb(255, 172, 51)" }} size={20} /></span> IMP cuz it can work also */}
                <span>
                  <FaStar style={{ fill: "rgb(191,191,191)" }} size={20} />
                </span>
              </div>
              <div className="text-[#808080]">
                <p>(150 Reviews)</p>
              </div>
              <div className="text-[#808080]">|</div>
              <div className="text-[#66ffa2]">In Stock</div>
            </div>
            <div className="text-3xl">
              <p>$192.00</p>
            </div>
            <div>
              <p>
                PlayStation 5 Controller Skin High quality vinyl with air
                <br />
                channel adhesive for easy bubble free install & mess
                <br />
                free removal Pressure sensitive.
              </p>
            </div>
            <hr className="mt-2" />

            <div className="colours flex gap-5">
              <p className="text-2xl">Colours:</p>
              <div className="flex gap-2">
                <div className="flex items-center justify-center ">
                  {" "}
                  {/*h-screen look at it */}
                  <div className="w-8 h-8 rounded-full border-4 border-black flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-blue-300"></div>
                  </div>
                </div>
                <div className="rounded-full w-8 h-8 bg-[#db4543]"></div>
              </div>
            </div>

            <div className="flex gap-5">
              <div>
                <p className="text-2xl">Size:</p>
              </div>
              <div className="flex gap-3">
                {sizes.map((size, i) => (
                  <SizeCard key={i} child={size}></SizeCard> // look:- how to use Child Prop in this case
                ))}
              </div>
            </div>

            <div className="count-buy-like flex flex-wrap gap-4"> {/*flex-wrap added */}
              <div>
                <Count />
              </div>
              <div className="bg-[#db4543] rounded-sm px-2 sm:px-8 flex justify-center items-center text-white"> {/*px-12 py-3 ; Seems like flex is a good Option; BUT I WANNA EXPLORE OTHER WAT+YS TOO*/}
                <p>Buy Now</p>
              </div>
              <div className="border-1 rounded-sm px-4 py-2">
                <IoHeartOutline size={30} />
              </div>
            </div>
            <div className="mt-3 border-1 flex flex-col gap-3 border-[#808080]">
              <div className="pt-3 pl-2 flex gap-3 pr-7">
                <div className="flex items-center">
                  <TbTruckDelivery size={40} />
                </div>
                <div className="loop ml-2 py-2 pb-4 flex flex-col gap-2">
                  <p className="text-xl font-bold">Free Delivery</p>
                  <p className="pb-2">
                    Enter your postal code for Delivery Availability
                  </p>
                  <hr className="mt-[-12px]" />
                </div>
              </div>
              <div className="pt-3 pl-2  border-t-1 border-[#808080] flex gap-3 pr-7">
                <div className="flex items-center">
                  <RiLoopLeftFill size={40} />
                </div>
                <div className="ml-2 py-2 flex flex-col gap-2">
                  <p className="text-xl font-bold">Free Delivery</p>
                  <p className="pb-3">
                    Free 30 Days Delivery Returns.{" "}
                    <span className="underline">Details</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[10rem]">
        <div className="redbox flex gap-[5px] content-center">
          <div className="w-[20px] h-[40px] bg-[#DB4543] rounded-sm"></div>
          <div className="ml-3 flex flex-wrap content-center">
            <p className="text-[#DB4543] font-bold ">Related Items</p>
          </div>
        </div>

        <div className="products">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {productDetail.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}

export default ProductDetails;

