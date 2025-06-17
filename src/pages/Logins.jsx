// function Logins() {
//   return (
//     <>
//       <div className="mt-16  h-[48.813rem] flex gap-[10rem] mx-auto">
//         {/* Left Side Image */}
//         <div className="h-[781px] w-[805px]">
//           <img
//             src="src/images/sideimage.png"
//             alt="phone-image"
//             className="h-full w-full object-cover"
//           />
//         </div>

//         {/* Login Form */}
//         <div className="w-[32%] mt-60 flex flex-col gap-4">
//           {/* Header */}
//           <div className="flex flex-col gap-8">
//             <h1 className="mb-3 text-4xl tracking-wider">
//               Log in to Exclusive
//             </h1>
//             <p>Enter your details below</p>
//           </div>

//           {/* Form */}
//           <div className="mt-12">
//             <form className="flex flex-col gap-10">
//               <input
//                 type="text"
//                 placeholder="Email or Phone Number"
//                 className="border-b border-black py-2 outline-none"
//               />
//               <input
//                 type="text"
//                 placeholder="Password"
//                 className="border-b border-black py-2 outline-none"
//               />

//               <div className="flex justify-between items-center">
//                 <input
//                   type="submit"
//                   value="Log In"
//                   className="bg-red-500 h-[56px] w-[143px] text-white cursor-pointer"
//                 />
//                 <p className="text-red-500 cursor-pointer">Forget Password?</p>
//               </div>
//             </form>
//           </div>

//           {/* Optional Google Sign In */}
//           {/*
//         <div className="flex border border-black justify-center items-center mt-6 gap-5 py-3 cursor-pointer">
//           <img src="src/images/google-logo.png" alt="google" className="w-6 h-6" />
//           <p>Sign in with Google</p>
//         </div>
//         */}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Logins;

function Logins() {
  return (
    <>
      <div className="main w-[95%] flex justify-between">
        <div className="mt-16 flex flex-col lg:flex-row lg:justify-between items-center w-full gap-12 lg:gap-[10rem]  max-w-screen-xl  px-4 md:px-0">
          {/* Left Side Image */}
          <div className="h-full w-full px-auto lg:px-0">
            <img
              src="src/images/sideimage.png"
              alt="phone-image"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          {/* Login Form */}
          <div className="w-full max-w-md lg:mt-10 flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-semibold tracking-wider">
                Log in to Exclusive
              </h1>
              <p className="text-sm text-gray-600">Enter your details below</p>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-6 mt-6">
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="border-b border-black py-2 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="border-b border-black py-2 outline-none"
              />

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <input
                  type="submit"
                  value="Log In"
                  className="bg-red-500 h-[48px] w-full sm:w-[143px] text-white cursor-pointer"
                />
                <p className="text-red-500 cursor-pointer text-sm">
                  Forget Password?
                </p>
              </div>
            </form>

            {/* Optional Google Sign In */}
            {/* 
    <div className="flex border border-black justify-center items-center mt-6 gap-5 py-3 cursor-pointer">
      <img src="src/images/google-logo.png" alt="google" className="w-6 h-6" />
      <p>Sign in with Google</p>
    </div>
    */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Logins;
