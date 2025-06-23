function NotFound(){
    // here i tried differently by not using Flex (like I do mostly)
    return(
        <>
          <div className="mt-[5rem] w-[100%] sm:w-[85%] mx-auto">
               <div className="flex gap-3">
                   <p className="text-[#808080]">Home</p>
                   <p className="text-[#808080]">/</p>
                   <p>404 Error</p>
               </div>

               <div className="mt-[7rem] ">
                    <div className="mx-auto flex justify-center flex-wrap gap-8">
                        <h1 className="text-9xl font-semibold">404</h1>
                        <h1 className="text-9xl font-semibold">Not </h1>
                        <h1 className="text-9xl font-semibold">Found</h1>
                    </div>
                    <div className="mt-[4rem] flex justify-center">
                        <p>Your visited page not found. You  may go to Home Page</p>
                    </div>
                    <div className="mt-15 flex justify-center pb-[6rem]">
                         <div className="bg-red-500 h-[56px] w-[256px] text-white flex content-center justify-center ">
                             <a className="py-3.5" href="#">Back to Home Page</a>
                         </div>
                    </div>
               </div>
           </div>

        </>
    )
}

export default NotFound;