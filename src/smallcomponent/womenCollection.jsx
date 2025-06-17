// export default function womenCollection () {
//     return (
//       <>
//         <div className="bg-black h-[284px] w-[570px]   text-white flex flex-wrap relative">
//           <div className="absolute mt-[8.5rem] ml-[3rem]">
//               <div className="">
//               <h2 className="text-2xl font-medium">Women's Collection</h2>
//               </div>
//               <div>
//                 <p className="text-xs mt-[0.7rem]">
//                 Black and White version of the PS5 <br />
//                 coming out on sale.
//                 </p>
//               </div>
//               <div className="mt-[1rem]">
//                 <p className="  ">Shop Now</p>
//                 <hr className="w-[4.7rem] "></hr>
//                </div>
//             </div>
//           <div className="ml-[9rem] mt-[2.5px] ">
//             <img src="src/images2/woman.png" alt="Woman in Black Hat" />
//           </div>
//         </div>
//       </>
//     );
//   }



import woman from '../images2/woman.png';

export default function WomenCollection() {
  return (
    <div className="bg-black text-white flex relative w-full h-[287px]  overflow-hidden">
      {/* Text Content */}
      <div className="absolute left-12 bottom-12 max-w-[300px]">
        <h2 className="text-2xl font-medium">Women's Collection</h2>
        <p className="text-xs mt-3">
          Black and White version of the PS5 <br />
          coming out on sale.
        </p>
        <div className="mt-4">
          <p>Shop Now</p>
          <hr className="w-20 mt-1" />
        </div>
      </div>

      {/* Image */}
      <div className="ml-auto mt-[2.5px] max-h-full right-0">
        <img
          src={woman}
          alt="Woman in Black Hat"
          className="h-full object-contain"
        />
      </div>
    </div>
  );
}
