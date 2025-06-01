

function RedButton({height, width, content}){
     return(
         <>
         <div style={{height,width}} className={`bg-red-500 text-white flex flex-wrap justify-center content-center `}>
             <p>{content}</p>
         </div>
         </>
     )
}

export default RedButton;