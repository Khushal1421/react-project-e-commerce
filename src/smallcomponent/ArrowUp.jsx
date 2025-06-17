import { FiArrowUp } from "react-icons/fi";

function ArrowUp(){
    function goUp(){
        // console.log('Clicked');
        // document.body.scrollTop = 0;
        // document.documentElement.scrollTop = 0;
        var rootElement = document.documentElement;
        rootElement.scrollTo({
            top: 0, // changing it's value is making no difference. See how it works
            behavior: "smooth"
          })
    }
   return(
       <>
            <div onClick={goUp} className=" flex content-center justify-center w-[46px] h-[46px] flex-wrap rounded-full bg-neutral-200"> {/*When i write goUp() function executed once but when I write goUp; it executed only when I clicked it' LOOK AT IT! */}
                <FiArrowUp size={30}  />
            </div>
            
       </>
   )
}

export default ArrowUp;