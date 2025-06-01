import '../css-files/RedBox.css';
function RedBox({text, heading}){
    return(
        <>
         <div className="flex flex-col gap-[25px]">
         <div className="flex gap-[5px] content-center" >
            <div className="w-[20px] h-[40px] bg-red-500 rounded-sm">
            </div>
            <div className="ml-3 flex flex-wrap content-center">
               <p className="text-red-500">{text}</p>
            </div>
            
         </div>
         <div className="">
            <h1 className="text-3xl font-bold">{heading}</h1>
         </div>
         </div>
        </>
        
    )
}

export default RedBox;