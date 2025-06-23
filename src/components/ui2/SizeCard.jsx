function SizeCard({child}){
   return(
       <>
         <div className="border-1 w-[50%] border-[#808080] px-2 py-2 hover:bg-[#db4543] hover:text-white">
              {child}
         </div>
       </>
   )
}

export default SizeCard;