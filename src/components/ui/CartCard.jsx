import { RxCross2 } from "react-icons/rx";



function CartCard({
    image,
    name,
    price,
    quantity,
    subtotal
}){
   return(
       <div className = 'mt-20 flex justify-between px-6 h-40 shadow-md'>
            <div className="flex">
                <img src={image} />
                {name}
            </div>
            <div>
                <p>${price}</p>
            </div>
            <div className="border border-red-500">
                <input className="border "type='number' min={0} max={100}value={quantity} />
            </div>
            <div>
                {price * quantity}
            </div>

       </div>
   )
}

export default CartCard;