import { FaAngleDown } from "react-icons/fa6";

function BlackHeaders(){

    return(
        <div className="bg-black w-full text-white flex flex-wrap justify-center content-center ">
        <div className=" flex content-center w-[85%] justify-between mx-auto  ">
          <div className="invisible"></div>
          <div className="flex gap-3 ">
            <p className="">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <p className="hidden sm:block underline">Shop Now</p>
          </div>
          <div className="hidden md:block">
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px", // optional: space between text and arrow
              }}
            >
              English <FaAngleDown />
            </p>
          </div>
        </div>
      </div>
    )

}

export default BlackHeaders;