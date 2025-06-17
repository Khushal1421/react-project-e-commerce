

function RedButton({height, width, content}){
     return(
         <>
         <div style={{height,width}} className={`bg-[#DB4543] text-white flex flex-wrap justify-center content-center rounded-sm `}>
             <p>{content}</p>
         </div>
         </>
     )
}

export default RedButton;