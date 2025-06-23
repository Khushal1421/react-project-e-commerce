import { TbBrandTwitter } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinLine } from "react-icons/ri";

function CeoCard({image, name,description}){
   return(
       <>
        <div className=" w-[]  mt-10 "> {/*xl:w-[31%] */}
           <div className="bg-neutral-100">
               <div className="object-contain ">
                   <img className="mx-auto h-[400px]"src={image} alt="Tom Cruise" />
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

// import { TbBrandTwitter } from "react-icons/tb";
// import { IoLogoInstagram } from "react-icons/io";
// import { RiLinkedinLine } from "react-icons/ri";

// function CeoCard({ image, name, description }) {
//   return (
//     <div className="w-full max-w-sm mx-auto mt-10 text-center">
//       {/* Image Section */}
//       <div className="bg-neutral-100 p-4 rounded-md shadow-sm">
//         <img
//           className="mx-auto w-full h-auto object-contain rounded-md"
//           src={image}
//           alt={name}
//         />
//       </div>

//       {/* Name & Description */}
//       <div className="mt-6">
//         <h1 className="text-2xl font-semibold">{name}</h1>
//         <p className="mt-2 text-sm text-gray-600">{description}</p>
//       </div>

//       {/* Social Icons */}
//       <div className="mt-4 flex justify-center space-x-4">
//         <TbBrandTwitter size={20} />
//         <IoLogoInstagram size={20} />
//         <RiLinkedinLine size={20} />
//       </div>
//     </div>
//   );
// }

// export default CeoCard;
