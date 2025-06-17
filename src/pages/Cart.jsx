// import React, { useState } from "react";

// const initialCart = [
//   {
//     id: 1,
//     name: "LCD Monitor",
//     price: 650,
//     quantity: 1,
//     image: "/images/lcd.png", // replace with your path
//   },
//   {
//     id: 2,
//     name: "H1 Gamepad",
//     price: 550,
//     quantity: 2,
//     image: "/images/gamepad.png", // replace with your path
//   },
// ];

// const Cart = () => {
//   const [cart, setCart] = useState(initialCart);
//   const [coupon, setCoupon] = useState("");

//   const updateQuantity = (id, quantity) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity: parseInt(quantity) } : item
//       )
//     );
//   };

//   const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className="p-8 max-w-7xl mx-auto">
//       <table className="w-full mb-6 text-left">
//         <thead>
//           <tr className="border-b">
//             <th className="py-4">Product</th>
//             <th className="py-4">Price</th>
//             <th className="py-4">Quantity</th>
//             <th className="py-4">Subtotal</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cart.map((item) => (
//             <tr key={item.id} className="border-b align-top">
//               <td className="py-4 flex items-center gap-3">
//                 <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
//                 <span>{item.name}</span>
//               </td>
//               <td className="py-4">${item.price}</td>
//               <td className="py-4">
//                 <select
//                   className="border rounded px-2 py-1"
//                   value={item.quantity}
//                   onChange={(e) => updateQuantity(item.id, e.target.value)}
//                 >
//                   {[1, 2, 3, 4, 5].map((n) => (
//                     <option key={n} value={n}>
//                       {n < 10 ? `0${n}` : n}
//                     </option>
//                   ))}
//                 </select>
//               </td>
//               <td className="py-4">${item.price * item.quantity}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="flex flex-wrap gap-8">
//         {/* Left Actions */}
//         <div className="flex flex-col gap-4 w-full md:w-1/2">
//           <div className="flex gap-4">
//             <input
//               type="text"
//               placeholder="Coupon Code"
//               className="border px-4 py-2 rounded w-full max-w-xs"
//               value={coupon}
//               onChange={(e) => setCoupon(e.target.value)}
//             />
//             <button className="bg-red-500 text-white px-6 py-2 rounded">Apply Coupon</button>
//           </div>

//           <div className="flex gap-4">
//             <button className="border px-6 py-2 rounded">Return To Shop</button>
//             <button className="border px-6 py-2 rounded">Update Cart</button>
//           </div>
//         </div>

//         {/* Cart Summary */}
//         <div className="border p-6 rounded-md w-full md:w-1/3">
//           <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
//           <div className="flex justify-between border-b py-2">
//             <span>Subtotal:</span>
//             <span>${subtotal}</span>
//           </div>
//           <div className="flex justify-between border-b py-2">
//             <span>Shipping:</span>
//             <span>Free</span>
//           </div>
//           <div className="flex justify-between font-semibold py-2">
//             <span>Total:</span>
//             <span>${subtotal}</span>
//           </div>
//           <button className="mt-4 w-full bg-red-500 text-white py-2 rounded">
//             Proceed to checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import {CartData} from '../data/info';
import CartCard from '../components/ui/CartCard';

function Cart() {
  return (
    <>
      <div className="ml-[7%] pl-3 mt-10 flex gap-3">
        <p className="text-[#909090]">Home</p>
        <p className="text-[#909090]">/</p>
        <p>Cart</p>
      </div>
      <div className="main w-[85%] mx-auto mt-20">
        <div className="flex shadow-md shadow-teal-400 h-20 items-center">
           <div className="flex justify-between px-6 w-full">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
           </div>
        </div>

        <div className="mt-10">
          {
              CartData.map((cartdata,index) => (
                 <CartCard key={index} {...cartdata} />
               )
              )
               
          }

          <div className="mt-10 flex justify-between">
               <div className="border h-[56px] w-[218px] flex justify-center items-center">
                    Return To Shop
               </div>
               <div className="border h-[56px] w-[195px] flex justify-center items-center">
                    Update Cart
               </div>
          </div>

          <div className="foot mt-20 flex justify-between">
               <div className="flex gap-3">
                  <div className='border w-[300px] h-[56px] flex items-center'>
                    <input className='ml-3'type="text" placeholder='Coupon Code' />
                  </div>
                  <div className='bg-[#db4543] w-[211px] h-[56px] flex items-center justify-center text-white'>
                      Apply Coupon
                  </div>

               </div>
                 {/* Here I am trying a different way other than flex */}
               <div className="border-2 w-[470px] h-[324px]">
                 <div className='mt-[2rem] ml-2'>
                   <p className='text-2xl'>Card Total</p>
                 </div>
                 <div className="mt-5 flex flex-col gap-5 px-2">
                       <div className="flex justify-between">
                          <p>Subtotal:</p>
                          <p>$1750</p>
                       </div>
                       <hr className='border' />
                       <div className="flex justify-between">
                          <p>Shipping:</p>
                          <p>Free</p>
                       </div>
                       <hr className='border' />
                       <div className="flex justify-between">
                          <p>Total:</p>
                          <p>1750</p>
                       </div>
                       <div className='mx-auto rounded-sm bg-[#db4543] w-[211px] h-[56px] flex items-center justify-center text-white'>
                      Apply Coupon
                  </div>
                 </div>
               </div>

          </div>
            

        </div>
      </div>
    </>
  );
}

export default Cart;
