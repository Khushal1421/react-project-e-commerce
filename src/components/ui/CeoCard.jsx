import { TbBrandTwitter } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinLine } from "react-icons/ri";

function CeoCard({image, name,description}){
   return(
       <>
        <div className=" w-[370px] h-[564px] mt-10">
           <div className="bg-neutral-100">
               <div className="">
                   <img className="mx-auto"src={image} alt="Tom Cruise" />
               </div>
           </div>
           <div className="mt-[32px]">
               <div>
                   <h1 className="text-3xl font-md ">{name}</h1>
                   <p className="mt-0.3">{description} </p>
               </div>
               <div className=" mt-3 flex gap-2"> {/*Is there other way beside flex? */}
                   <div>
                       <TbBrandTwitter size={20} />
                   </div>
                   <div>
                       <IoLogoInstagram size={20} />
                   </div>
                   <div>
                       <RiLinkedinLine size={20} />
                   </div>
               </div>
           </div>
        </div>
       </>
   )
}

export default CeoCard;