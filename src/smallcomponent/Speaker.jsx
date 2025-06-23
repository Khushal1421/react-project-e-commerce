// function Speaker()
// {
//     return(
//         <>
//          <div className="bg-black  text-white flex justify-around w-full h-[500px]">
//              <div>
//                 <div className="mt-[3rem]">
//                     <p className="text-green-400">Categories</p>
//                 </div>
//                 <div className="mt-[2.2rem]">
//                     <p className="text-5xl">Enhance Your</p>
//                     <p className="text-5xl mt-[1rem]">Music Experience</p>
//                 </div>
//                 <div className="flex gap-3 mt-[2.7rem] ">
//                     <div className="rounded-full w-[62px] h-[62px] bg-white text-black flex justify-between flex-wrap content-center">
//                         <p className="ml-[1rem] font-bold">23</p>
//                         <p className="ml-[0.8rem] text-xs">Hours</p>
//                     </div>
//                     <div className="rounded-full w-[62px] h-[62px] bg-white text-black flex justify-between flex-wrap content-center">
//                         <p className="ml-[1rem] font-bold">05</p>
//                         <p className="ml-[0.9rem] text-xs">Days</p>
//                     </div>
//                     <div className="rounded-full w-[62px] h-[62px] bg-white text-black flex justify-between flex-wrap content-center">
//                         <p className="ml-[1rem] font-bold">59</p>
//                         <p className="ml-[0.5rem] text-xs">Minutes</p>
//                     </div>
//                     <div className="rounded-full w-[62px] h-[62px] bg-white text-black flex justify-between flex-wrap content-center">
//                         <p className="ml-[1rem] font-bold">35</p>
//                         <p className="ml-[0.4rem] text-xs">Seconds</p>
//                     </div>
                    
//                 </div>
//                 <div className=" mt-[2.9rem] bg-green-400  w-[171px] h-[56px] flex flex-wrap justify-center content-center">
//                         <p>Buy Now!</p>
//                 </div>
//              </div>
//              <div className="mt-[3.5rem]">
//                 <img src="src/images/Speaker.png" alt="Speaker" />
//              </div>
//            </div>
//         </>
//     )
    
// }

// export default Speaker;

import speaker from '../images/Speaker.png'
// src/images/Speaker.png

function Speaker()
{
    return(
        <>
         <div className="bg-black  text-white  flex flex-col-reverse md:flex md:flex-row justify-around w-full h-full pb-[5rem] ">
             <div>
                <div className="hidden md:block mt-[3rem]  ">
                    <p className="text-green-400">Categories</p>
                </div>
                <div className="mt-[2.2rem] flex flex-col flex-wrap content-center md:block">
                    <p className=" text-3xl lg:text-5xl">Enhance Your</p>
                    <p className=" text-3xl lg:text-5xl mt-[1rem]">Music Experience</p>
                </div>
                <div className="flex justify-center md:justify-normal gap-3 mt-[2.7rem]  ">
                    <div className="rounded-full w-[57px] h-[57px] lg:w-[62px] lg:h-[62px] bg-white text-black flex flex-col justify-center flex-wrap content-center">
                        <p className=" mx-auto font-bold">23</p>
                        <p className=" mx-auto text-xs">Hours</p>
                    </div>
                    <div className="rounded-full w-[57px] h-[57px] lg:w-[62px] lg:h-[62px] bg-white text-black flex flex-col justify-center flex-wrap content-center">
                        <p className="mx-auto font-bold">05</p>
                        <p className="mx-auto text-xs">Days</p>
                    </div>
                    <div className="rounded-full w-[57px] h-[57px] lg:w-[62px] lg:h-[62px] bg-white text-black flex justify-center flex-wrap content-center">
                        <p className="mx-auto font-bold">59</p>
                        <p className="mx-auto text-xs">Minutes</p>
                    </div>
                    <div className="rounded-full w-[57px] h-[57px] lg:w-[62px] lg:h-[62px] bg-white text-black flex flex-col justify-center flex-wrap content-center">
                        <p className="mx-auto font-bold">35</p>
                        <p className="mx-auto text-xs">Seconds</p>
                    </div>
                    
                </div>
                <div className="mx-auto md:mx-0 mt-[2.9rem] bg-[#00FF66]  w-[171px] h-[56px] flex flex-wrap justify-center content-center ">
                        <p>Buy Now!</p>
                </div>
             </div>
             <div className="mt-[3.5rem] h-[13rem]  md:h-auto ">
                 
                 <img className="mx-auto w-[70%] h-[100%] md:w-auto md:h-auto " src={speaker} alt="Speaker" />
                
             </div>
           </div>
        </>
    )
    
}

export default Speaker;