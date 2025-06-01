import { FaArrowRightLong } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";


function Phone(){
    return(
        <>

        <div className="bg-black  w-[892px] h-[344px] text-white flex justify-between relative">
            <div className="ml-[5rem] mt-[4rem] ">
                <div className="flex gap-5 flex-wrap w-[230px] ">
                    <div>
                      <img src="src/images/WhiteApple.png" alt="White Apple" />
                    </div>
                    <p className="flex flex-wrap content-center">iPhone 14 Series </p>
                </div>
                <div className="mt-6">
                    <p className="text-4xl font-extrabold"> Up to 10% </p>
                    <p className="text-4xl font-extrabold mt-2"> off Voucher</p>
                </div>
                <div>
                    <div className="flex mt-[2rem] gap-3">
                        <div>
                          <p className=''>Shop Now</p>
                          <hr className="border-" />
                        </div>
                        <div>
                          <GoArrowRight size={24}/>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            <div className="mt-[1rem]"> 
              <img src="src/images/hero_endframe__cvklg0xk3w6e_large 2.png" style={{width:'496px', height:'326px'}}width={'496px'} height={'352px'} alt="Phone" />
            </div>

            <div className="absolute ml-[20rem] mt-[20rem] flex gap-6">
                <div className="rounded-full bg-gray-500 h-[12px] w-[12px]" ></div>
                <div className="rounded-full bg-gray-500 h-[12px] w-[12px]" ></div>
                <div className="rounded-full bg-gray-500 h-[12px] w-[12px]" ></div>
                <div className="rounded-full bg-gray-500 h-[12px] w-[12px]" ></div>
                <div className="rounded-full bg-gray-500 h-[12px] w-[12px]" ></div>


            </div>
           
           
        </div>
        
        </>
    )
}

export default Phone;