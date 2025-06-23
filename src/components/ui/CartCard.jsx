// import { RxCross2 } from "react-icons/rx";

// function CartCard({
//     image,
//     name,
//     price,
//     quantity,
//     subtotal
// }){
//    return(
//        <div className = 'mt-20 flex justify-between px-6 py-3 shadow-md'>
//             <div className="flex object-contain h-[2rem]">
//                 <img src={image} />
//                 {name}
//             </div>
//             <div>
//                 <p>${price}</p>
//             </div>
//             <div className="border border-red-500">
//                 <input className="border "type='number' min={0} max={100}value={quantity} />
//             </div>
//             <div>
//                 {price * quantity}
//             </div>

//        </div>
//    )
// }

// export default CartCard;

import { RxCross2 } from "react-icons/rx";

{
  /* <div className="invisible hover:visible bg-[#db4543] rounded-full w-20 h-20 ">
                    <RxCross2 size={10} />
                </div> */
}

function CartCard({ image, name, price, quantity, subtotal }) {
  return (
    <div className="relative mt-20 grid grid-cols-4 items-center gap-6 px-6 py-4 shadow-md bg-white">
      <div className="flex object-contain  gap-4 group h-[2rem]">
        <div className="absolute flex items-center opacity-0 group-hover:opacity-100 transition justify-center top-[-1px] left-3 bg-[#db4543] rounded-full w-5 h-5 ">
          <RxCross2 color="white" size={10} />
        </div>

        <img src={image} />
        <span>{name}</span>
      </div>
      <div>
        <p>${price}</p>
      </div>
      <div className=" ">
        <input
          className=" "
          type="number"
          min={0}
          max={100}
          defaultValue={quantity}
        />
      </div>
      <div>{price * quantity}</div>
    </div>
  );
}

export default CartCard;
