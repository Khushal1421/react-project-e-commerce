import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
import { BsTrash3 } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";

import { FiEye } from "react-icons/fi";


function WishCard({ name, oldPrice, price, image, percentage, color, star,reviews }) {
  return (
    <>
      <div>  {/*here group is imp as it's the key of hovering visibility */}
        <div className="main relative group max-w-[370px] ">
          <div className="bg-neutral-200 ">
            <div className="pd flex justify-between px-4 pt-3">
                <div
                  className={` text-white bg-${color} h-[26px] w-[55px] rounded-md flex justify-center items-center ${
                    percentage ? "" : "invisible"
                  }`}
                >
                  {percentage}
                </div>
              

              <div className="bg-white h-[40px] w-[40px] rounded-full flex justify-center items-center">
                <div>
                  <BsTrash3 size={24} />
                </div>
              </div>
            </div>

            <div className="flex justify-center ">
              <div>
                <img src={image}
                 className="w-full h-[120px] object-contain" // IMP
                />
              </div>
            </div>

            <div className="mt-3 bg-black text-white rounded-md invisible group-hover:visible ">
              <div className="flex justify-center items-center gap-2 py-3">
                <div>
                  <IoCartOutline size={20} />
                </div>
                <div>
                  <p>Add To Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <div className={``}>{name}</div>
          <div className="flex gap-3">
            <p className="text-[#db4543]">${price}</p>
            <p
              className={`text-[#808080] line-through ${
                oldPrice ? "" : "invisible"
              }`}
            >
              ${oldPrice}
            </p>
          </div>
          <div className="flex gap-4">
          {
              star && (<div className="flex gap-2">{renderStars(star)}</div>)
              
          }
          {reviews && (<span className="text-sm text-gray-600 ml-1">({reviews})</span>)
          }
          </div>
          
        </div>
      </div>
    </>
  );
}

const renderStars = (star) => {
  const stars = [];
  const pureStar = Math.floor(star);
  let halfStar = star % pureStar;
  let remainingStar = Math.ceil(5 - pureStar);
  for (let i = 0; i < pureStar; i++) {
    stars.push(
      <span key={i}>
        <FaStar style={{ color: "rgb(255, 172, 51)" }} size={20} />
      </span>
    );
  }
  if (halfStar) {
    stars.push(
      <span key={halfStar}>
        <FaStarHalfAlt />
      </span>
    );
  }
  if (remainingStar != 0) {
    for (let i = 5; i < 5 + remainingStar; i++) {
      stars.push(
        <span key={i}>
          <GoStarFill />
        </span>
      );
    }
  }
  return stars;
};

export { WishCard };
