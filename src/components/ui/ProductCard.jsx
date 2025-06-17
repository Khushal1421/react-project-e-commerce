
import { IoHeartOutline, IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";

import { ImStarEmpty } from "react-icons/im";

const ProductCard = ({
  image,
  percent,
  color,
  name,
  price,
  oldPrice,
  rating,
  reviews,
}) => {
  return (
    <>
      <div>
        <div className="group relative w-full max-w-[350px]   bg-neutral-100 p-4  shadow hover:shadow-lg transition flex flex-col justify-between mt-10">
          {/* Top Section: Discount + Icons */}
          <div className="flex justify-between items-start ">
            <div                                                   // Q. How to set default color here? i.e. acc. to # configuration
              className={`h-[26px] w-[55px] text-white text-xs bg-${color} px-2 py-1 flex items-center justify-center rounded ${
                percent ? "" : "invisible"
              }`}
            >
              {percent || "N/A"}
            </div>

            <div className="flex flex-col gap-2">
              <div className="rounded-full w-[34px] h-[34px] bg-white flex items-center justify-center shadow">
                <IoHeartOutline size={20} />
              </div>
              <div className="rounded-full w-[34px] h-[34px] bg-white flex items-center justify-center shadow">
                <IoEyeOutline size={20} />
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative   ">
            <div className="">
              <img
                src={image}
                alt="Product"
                className="w-full h-[120px] object-contain"
              />
            </div>
            <div className="mt-6 invisible">
              No Way
            </div>
            
          </div>
          {/* Hover: Add to Cart Button */}
          <div className="mt-1 absolute  w-full bottom-0 left-0 right-0 bg-black bg-opacity-70 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-2 rounded-b-md"> 
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-semibold">
                Add To Cart
              </button>
            </div>
        </div>

        {/* Product Details */}
        <div className="text-left bg-white mt-[1.2rem]">
          <h3 className="font-semibold text-sm mb-1">{name}</h3>
          <p className="text-red-500 mt-2 text-sm">
            ${price}
            {oldPrice && (
              <span className="line-through text-gray-400 ml-2">
                ${oldPrice}
              </span>
            )}
          </p>

          <div className="flex items-center gap-1 mt-2">
            {renderStars(rating)}
            <span className="text-sm text-gray-600 ml-1">({reviews})</span>
          </div>
        </div>
      </div>
    </>
  );
};

// Renders stars dynamically based on rating
const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const remainingStar = 5- (Math.ceil(rating));

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={i}>
        <FaStar style={{ color: "rgb(255, 172, 51)" }} size={20} />
      </span>
    );
  }
  if (halfStar) {
    stars.push(
      <span key="half">
        <FaStarHalfAlt style={{ fill: "rgb(255, 172, 51)" }} size={20} />
      </span>
    );
  }

  // Color vs Fill
  if(remainingStar != 0){
    for(let i=6;i<remainingStar+6;i++){
      stars.push( 
        <span key={i}>
          <GoStarFill style={{ fill: "rgb(191,191,191)" }} size={20} />
        </span>
      );
    }
  }
  return stars;
};

export default ProductCard;