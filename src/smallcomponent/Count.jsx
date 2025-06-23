import { useState } from "react";

import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

function Count() {
  let [count, setCount] = useState(0);
  //   console.log(count) (temporary solved problem; look deeper)
  return (
    <>
      <div className="count flex  ">
        {" "}
        {/*border-1 border-[#808080] */}
        <div
          onClick={() => setCount(--count)}
          className="minus px-4 py-4 flex items-center justify-center border-1 border-[#808080]"
        >
          <div>
            <FaMinus />
          </div>
        </div>
        <div className="buy flex items-center justify-center border-t-1 border-b-1 border-[#808080] px-8 w-[5rem]">{count}</div>
        <div
          onClick={() => setCount(++count)}
          className="minus py-4 px-4 flex items-center justify-center bg-[#db4543]"
        >
          <div>
            <FaPlus fill="white" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Count;
