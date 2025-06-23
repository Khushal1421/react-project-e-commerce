// import { CartData } from "../data/info";
// import CartCard from "../components/ui/CartCard";

// function Cart() {
//   return (
//     <>
//       <div className="ml-[7%] pl-3 mt-10 flex gap-3">
//         <p className="text-[#909090]">Home</p>
//         <p className="text-[#909090]">/</p>
//         <p>Cart</p>
//       </div>
//       <div className="main w-[85%] mx-auto mt-20">
//         <div className="flex shadow-md shadow-teal-400 h-20 items-center">
//           <div className="flex justify-between px-6 w-full">
//             <p>Product</p>
//             <p>Price</p>
//             <p>Quantity</p>
//             <p>Subtotal</p>
//           </div>
//         </div>

//         <div className="mt-10">
//           {CartData.map((cartdata, index) => (
//             <CartCard key={index} {...cartdata} />
//           ))}

//           <div className="mt-10 flex justify-between">
//             <div className="border h-[56px] w-[218px] flex justify-center items-center">
//               Return To Shop
//             </div>
//             <div className="border h-[56px] w-[195px] flex justify-center items-center">
//               Update Cart
//             </div>
//           </div>

//           <div className="foot mt-20 flex justify-between flex-wrap gap-10">
//             <div className="flex gap-3">
//               <div className="border w-[300px] h-[56px] flex items-center">
//                 <input className="ml-3" type="text" placeholder="Coupon Code" />
//               </div>
//               <div className="bg-[#db4543] w-[211px] h-[56px] flex items-center justify-center text-white">
//                 Apply Coupon
//               </div>
//             </div>
//             {/* Here I am trying a different way other than flex */}
//             <div className="border-2 w-[470px] h-[324px]">
//               <div className="mt-[2rem] ml-2">
//                 <p className="text-2xl">Card Total</p>
//               </div>
//               <div className="mt-5 flex flex-col gap-5 px-2">
//                 <div className="flex justify-between">
//                   <p>Subtotal:</p>
//                   <p>$1750</p>
//                 </div>
//                 <hr className="border" />
//                 <div className="flex justify-between">
//                   <p>Shipping:</p>
//                   <p>Free</p>
//                 </div>
//                 <hr className="border" />
//                 <div className="flex justify-between">
//                   <p>Total:</p>
//                   <p>1750</p>
//                 </div>
//                 <div className="mx-auto rounded-sm bg-[#db4543] w-[211px] h-[56px] flex items-center justify-center text-white">
//                   Apply Coupon
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cart;

import { CartData } from "../data/info";
import CartCard from "../components/ui/CartCard";

function Cart() {
  return (
    <>
      <div className="ml-[7%] pl-3 mt-10 flex gap-3">
        <p className="text-[#909090]">Home</p>
        <p className="text-[#909090]">/</p>
        <p>Cart</p>
      </div>
      <div className="main w-[85%] mx-auto mt-20">
        <div className="overflow-x-auto w-full">
          <div className="min-w-[700px]">
            <div className="grid grid-cols-4 font-semibold px-6 py-5 shadow-md shadow-teal-400 bg-white">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
            <div className="mt-10">
              {CartData.map((cartdata, index) => (
                <CartCard key={index} {...cartdata} />
              ))}
            </div>
          </div>
        </div>  

          <div className="mt-10 flex justify-between">
            <div className="border h-[50px] w-[150px] sm:h-[56px] sm:w-[218px] flex justify-center items-center">
              Return To Shop
            </div>
            <div className="border h-[50px] w-[130px] sm:h-[56px] sm:w-[195px] flex justify-center items-center">
              Update Cart
            </div>
          </div>

          <div className="foot mt-20 flex justify-between flex-wrap gap-10">
            <div className="flex gap-5 flex-wrap">
              <div className="border w-[300px] h-[56px] flex items-center">
                <input className="ml-3" type="text" placeholder="Coupon Code" />
              </div>
              <div className="bg-[#db4543] w-[211px] h-[56px] flex items-center justify-center text-white">
                Apply Coupon
              </div>
            </div>
            {/* Here I am trying a different way other than flex */}
            <div className="border-2 w-[470px] h-[324px]">
              <div className="mt-[2rem] ml-2">
                <p className="text-2xl">Card Total</p>
              </div>
              <div className="mt-5 flex flex-col gap-5 px-2">
                <div className="flex justify-between">
                  <p>Subtotal:</p>
                  <p>$1750</p>
                </div>
                <hr className="border" />
                <div className="flex justify-between">
                  <p>Shipping:</p>
                  <p>Free</p>
                </div>
                <hr className="border" />
                <div className="flex justify-between">
                  <p>Total:</p>
                  <p>1750</p>
                </div>
                <div className="mx-auto rounded-sm bg-[#db4543] w-[211px] h-[56px] flex items-center justify-center text-white">
                  Apply Coupon
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </>
  );
}

export default Cart;
