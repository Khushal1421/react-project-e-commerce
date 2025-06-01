import { FiArrowLeft } from "react-icons/fi";
// <FiArrowLeft />

import { FiArrowRight } from "react-icons/fi";
// <FiArrowRight />
// neutral-100

function LeftRight(){

    return(
        <div className="flex gap-[5px] flex-wrap content-end">
            <div className=" flex content-center justify-center w-[46px] h-[46px] flex-wrap rounded-full bg-neutral-200">
                <FiArrowLeft size={30}  />
            </div>
            <div className=" flex content-center justify-center w-[46px] h-[46px] flex-wrap  rounded-full bg-gray-200">
                <FiArrowRight size={30} />
            </div>
        </div>
    )

}

export default LeftRight;
