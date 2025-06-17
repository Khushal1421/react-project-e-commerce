function NotFound(){
    // here i tried differently by not using Flex (like I do mostly)
    return(
        <>
          <div className="ml-[10%]">
               <div>
                   Home/404 Error
               </div>

               <div className="mt-[7rem] ">
                    <div className="pl-[10rem]">
                        <h1 className="text-9xl font-semibold">404 Not Found</h1>
                    </div>
                    <div className="mt-[4rem] pl-[24rem]">
                        <p>Your visited page not found. You  may go to Home Page</p>
                    </div>
                    <div className="mt-15 pl-[29rem]">
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