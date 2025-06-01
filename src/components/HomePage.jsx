import { FaAngleRight } from "react-icons/fa6";
import LeftRight from "../smallcomponent/LeftRight";
import RedBox from "../smallcomponent/RedBox";
// import { IoHeartOutline } from "react-icons/io5";

import "../css-files/HomePage.css";

// function HomePage() {

//   return (
//     <>
//       <div className="main-div"> {/*Div which contains all of Homepage */}
//         <div className="phone-list">
//           <div className="list">
//             <div className="lis">
//               <ul>
//               <p
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 Woman's Fashion <FaAngleRight />
//               </p>
//               <p style={{ display: "flex", alignItems: "center", justifyContent:"space-between" }}>
//                 Men's Fashion <FaAngleRight />
//               </p>
//               <p>Electronics</p>
//               <p>Home and Lifestyle</p>
//               <p>Medicine</p>
//               <p>Sports & Outdoor</p>
//               <p>Baby's & Toys</p>
//               <p>Groceries and Pets</p>
//               <p>Health and Beauty</p>
//               </ul>
//             </div>
            
//           </div>

//           <div className="phone">
//             <img src="src/images/Frame560.png" alt="Phone Image" />

//           </div>
//         </div>

//         {/* It's Flash Sales */}

//         <div className="flash-sales">
//           <div className="flash-sale relative">
//              <RedBox text="Today's" heading="Flash Sales" />
//              <div className="times">
//                <div>
//                   <img src="src/images/timing.png" alt="timing"/>
//                </div>
//                <LeftRight />
//              </div>
            
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default HomePage;

import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/Button";
import { Heart, Eye, ShoppingCart } from "lucide-react";

const products = [
  {
    name: "HAVIT HV-G92 Gamepad",
    price: "$120",
    oldPrice: "$160",
    discount: "-40%",
    rating: 88,
    image: "/images/gamepad.jpg",
  },
  {
    name: "AK-900 Wired Keyboard",
    price: "$960",
    oldPrice: "$1160",
    discount: "-35%",
    rating: 75,
    image: "/images/keyboard.jpg",
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: "$370",
    oldPrice: "$400",
    discount: "-30%",
    rating: 99,
    image: "/images/monitor.jpg",
  },
  {
    name: "S-Series Comfort Chair",
    price: "$375",
    oldPrice: "$400",
    discount: "-25%",
    rating: 99,
    image: "/images/chair.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="font-sans">
      <header className="flex items-center justify-between p-4 border-b">
        <h1 className="text-2xl font-bold">Exclusive</h1>
        <nav className="hidden md:flex gap-6">
          <a href="#">Home</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
          <a href="#">Sign Up</a>
        </nav>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="border rounded px-2 py-1 hidden md:block"
          />
          <Heart className="w-6 h-6" />
          <ShoppingCart className="w-6 h-6" />
        </div>
      </header>

      <section className="p-4 bg-black text-white text-center">
        <h2 className="text-xl">iPhone 14 Series</h2>
        <p className="text-3xl font-bold mt-2">Up to 10% off Voucher</p>
        <button className="mt-4 px-6 py-2 border rounded">Shop Now →</button>
      </section>

      <section className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-red-500 font-bold">Today's</h3>
            <h2 className="text-2xl font-semibold">Flash Sales</h2>
          </div>
          <div className="text-center">
            <span className="mx-1">03 Days</span>
            <span className="mx-1">23 Hours</span>
            <span className="mx-1">19 Minutes</span>
            <span className="mx-1">56 Seconds</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, idx) => (
            <Card key={idx} className="relative">
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain"
              />
              <CardContent className="p-2">
                <h4 className="font-semibold text-sm">{product.name}</h4>
                <div className="text-sm">
                  <span className="text-red-500 font-bold mr-2">{product.price}</span>
                  <span className="line-through text-gray-500">{product.oldPrice}</span>
                </div>
                <div className="text-yellow-500 text-sm">★ {product.rating}</div>
                <Button className="mt-2 w-full">Add To Cart</Button>
              </CardContent>
              <div className="absolute top-2 right-2 flex flex-col space-y-1">
                <Heart className="w-4 h-4 text-gray-600" />
                <Eye className="w-4 h-4 text-gray-600" />
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

