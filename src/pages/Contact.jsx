// import { FiPhone } from "react-icons/fi";
// import { MdOutlineMail } from "react-icons/md";

// export default function Contact() {
//   return (
//     <>
//       <div className="ml-[7.5%]">
//         <div className="mt-[4rem]">
//           <p>Home / Contact</p>
//         </div>

//         <div className="mt-[4rem] flex gap-[1.5rem]  top-box">
//           <div className="flex justify-center content-center shadow-md left-box">
//             <div className="px-9 py-9">
//               <div className="call flex gap-[32px] flex-col  ">
//                 <div className="flex gap-4 call-to-us">
//                   <div className="rounded-full h-[40px] w-[40px] bg-red-500 flex justify-center flex-wrap content-center">
//                     <div className="">
//                       <FiPhone color="white" size={20} />
//                     </div>
//                   </div>

//                   <div className="flex flex-wrap content-center">
//                     <p>Call to Us</p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <p>We are available 24/7, 7 days a week.</p>
//                   <p>Phone: +8801611112222</p>
//                 </div>
//               </div>

//               <hr className="mx-auto w-[100%] mt-[32px]" />

//               <div className="email mt-[32px]">
//                 <div className="flex gap-4 write-to-us">
//                   <div className="rounded-full h-[40px] w-[40px] bg-red-500 flex flex-wrap justify-center content-center">
//                     <div>
//                       <MdOutlineMail color="white" size={20} />
//                     </div>
//                   </div>
//                   <div className="flex flex-wrap content-center">
//                     <p>Write to US </p>
//                   </div>
//                 </div>
//                 <div className="mt-[24px] flex flex-col gap-3">
//                   <p>
//                     Fill out our form and we will contact <br />
//                     you within 24 hours.
//                   </p>
//                   <p>Emails: customer@exclusive.com</p>
//                   <p>Emails: support@exclusive.com</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="shadow-md w-[800px] h-[457px]  right-box">
//             <div className="px-[3rem] py-[2rem]  main-box">
//               <div className="flex gap-[16px]">
//                 <div className="bg-neutral-100 w-[235px] h-[50px] ">
//                   <input type="text" placeholder="Your Name" />
//                 </div>
//                 <div className="bg-neutral-100 w-[235px] h-[50px]">
//                   <input type="text" placeholder="Your Name" />
//                 </div>
//                 <div className="bg-neutral-100 w-[235px] h-[50px]">
//                   <input type="text" placeholder="Your Name" />
//                 </div>
//               </div>
//               <div className="bg-neutral-100 mt-[32px]">
//                 <input
//                   className="w-[737px] h-[207px]"
//                   type="text"
//                   placeholder="Your Message"
//                 />
//               </div>
//               <div className="mt-[32px] flex justify-end">
//                 <div className="bg-red-500 h-[56px] w-[215px] text-white flex content-center justify-center ">
//                   <a className="py-3.5" href="#">
//                     Send Message
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

export default function Contact() {
  return (
    <>
      <div className=" w-[85%] mx-auto">
        <div className="mt-[4rem]">
          <p>Home / Contact</p>
        </div>

        <div className="top-box  mx-auto mt-[4rem] flex flex-col lg:flex-row gap-10  px-0 ">
          {" "}
          {/*w-full px-4 */}
          <div className="left-box w-full  lg:w-[35%] flex justify-center items-center shadow-md ">
            {" "}
            {/*Here, old ones:- lg:w-auto, sm:w-[50%]removed, in place of content-centent:- items-center*/}
            <div className="px-9 py-9">
              <div className="call flex gap-[32px] flex-col  ">
                <div className="flex gap-4 call-to-us">
                  <div className="rounded-full h-[40px] w-[40px] bg-[#db4543] flex justify-center flex-wrap content-center">
                    <div className="">
                      <FiPhone color="white" size={20} />
                    </div>
                  </div>

                  <div className="flex flex-wrap content-center">
                    <p>Call to Us</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p>We are available 24/7, 7 days a week.</p>
                  <p>Phone: +8801611112222</p>
                </div>
              </div>

              <hr className="mx-auto w-[100%] mt-[32px]" />

              <div className="email mt-[32px]">
                <div className="flex gap-4 write-to-us">
                  <div className="rounded-full h-[40px] w-[40px] bg-[#db4543] flex flex-wrap justify-center content-center">
                    <div>
                      <MdOutlineMail color="white" size={20} />
                    </div>
                  </div>
                  <div className="flex flex-wrap content-center">
                    <p>Write to US </p>
                  </div>
                </div>
                <div className="mt-[24px] flex flex-col gap-3">
                  <p>
                    Fill out our form and we will contact <br />
                    you within 24 hours.
                  </p>
                  <p>Emails: customer@exclusive.com</p>
                  <p>Emails: support@exclusive.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-box w-full lg:w-[65%] shadow-md mt-10 lg:mt-0">
            {" "}
            {/*Old Ones:- mt-[2rem] shadow-md w-[800px] h-[457px] */}
            <div className="px-[3rem] py-[2rem]  main-box">
              <div className="flex flex-col md:flex-row gap-4 w-full">
                {" "}
                {/*gap-[2rem] removed; w-full added */}
                {/* <div className="bg-neutral-100 flex items-center px-2 ">
                  <input type="text" placeholder="Your Name" required/>
                </div>
                <div className="bg-neutral-100 flex items-center px-2">
                  <input type="text" placeholder="Your Email" required />
                </div>
                <div className="bg-neutral-100 flex items-center px-2">
                  <input type="text" placeholder="Your Phone" required />
                </div> */}
                <input
                  className="flex-1 bg-neutral-100 px-4 py-2 w-full"
                  type="text"
                  placeholder="Your Name"
                  required
                />
                {/* how did w-full ensure that input stays within limit? */}
                <input
                  className="flex-1 bg-neutral-100 px-4 py-2 w-full"
                  type="email"
                  placeholder="Your Email"
                  required
                />
                <input
                  className="flex-1 bg-neutral-100 px-4 w-full py-2"
                  type="tel"
                  placeholder="Your Phone"
                  required
                />
              </div>
              {/* <div className="bg-neutral-100  mt-[3rem]">
                <input className="" type="text" placeholder="Your Message" />
              </div> */}
              <textarea
                className="bg-neutral-100 w-full mt-15 px-4 py-3"
                placeholder="Your Message"
                rows="6"
              />

              <div className="mt-[32px] flex justify-end">
                <div className="bg-[#db4543] px-6 py-4  text-white flex content-center justify-center ">
                  <a className="" href="#">
                    Send Message
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
