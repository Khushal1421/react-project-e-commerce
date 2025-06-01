import "../css-files/SignUp.css";
// function SignUp()
// {
//     // oklch(0.59 0.19 23.92)
//     return(
//         <div className="flex mt-[100px] justify-between">
//             <div className="w-[805px] h-[781px]">
//                 <img src="src/images/sideimage.png" alt="phone-image" />
//             </div>

//             <div className="mr-[20%] mt-[7%] flex flex-col gap-[20px]" >
//                   <h1 className="ml-[3px] text-4xl">Create an account</h1>
//                   <p>Enter your details below</p>
//                   <form className=" mt-[20px] flex flex-col gap-[40px]">
//                     <input type="text" className="border-b-1" placeholder="Name" />
//                     <input type="text" className="border-b-1" placeholder="Email or Phone Number" />
//                     <input type="password" className="border-b-1" placeholder="Password" />
//                     <input type="submit" className="bg-red-500 h-[50px] text-white"  value="Create your Account" />

//                 </form>

//                 <div className="flex flex-row border text-center flex-wrap content-center h-[50px] w-[371px] gap-[17px]">
//                      <img className="h-[24px] w-[24px] ml-[23%]" src="src/logos/Icon-Google.png" />
//                      <p className="">Sign up with Google</p>
//                 </div>
//             </div>

//         </div>
//     )

// }

// export default SignUp;

// function SignUp() {
//     return (
//       <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-[5%] lg:px-[10%] py-10 gap-12">

//         {/* Left Image */}
//         <div className="hidden md:block w-full max-w-[600px]">
//           <img
//             src="src/images/sideimage.png"
//             alt="phone-cart"
//             className="w-full h-auto object-contain"
//           />
//         </div>

//         {/* Right Form Section */}
//         <div className="w-full max-w-[400px] flex flex-col items-center text-center">
//           <h1 className="text-3xl md:text-4xl font-semibold mb-2">Create an account</h1>
//           <p className="text-gray-600 mb-6">Enter your details below</p>

//           <form className="w-full flex flex-col gap-6 text-left">
//             <input
//               type="text"
//               placeholder="Name"
//               className="border-b border-gray-300 py-2 focus:outline-none focus:border-black"
//             />
//             <input
//               type="text"
//               placeholder="Email or Phone Number"
//               className="border-b border-gray-300 py-2 focus:outline-none focus:border-black"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="border-b border-gray-300 py-2 focus:outline-none focus:border-black"
//             />
//             <input
//               type="submit"
//               value="Create Account"
//               className="bg-red-500 text-white py-3 rounded-md cursor-pointer hover:bg-red-600 transition"
//             />
//           </form>

//           {/* Google Sign-Up */}
//           <div className="flex items-center justify-center border mt-4 py-3 px-4 gap-3 w-full rounded-md cursor-pointer hover:bg-gray-100 transition">
//             <img
//               src="src/logos/Icon-Google.png"
//               alt="google-icon"
//               className="w-6 h-6"
//             />
//             <span className="text-sm font-medium">Sign up with Google</span>
//           </div>

//           {/* Login Link */}
//           <p className="mt-6 text-sm text-gray-600">
//             Already have account?{' '}
//             <a href="#" className="text-black underline hover:text-red-500">
//               Log in
//             </a>
//           </p>
//         </div>
//       </div>
//     );
//   }

//   export default SignUp;

function SignUp() {
  return (
    <div className="top-div">
      <div className="mobile-image">
        <img src="src/images/sideimage.png" alt="phone-image" />
      </div>

      <div className="sign-up">
          <div className="create-account">
          <h1 className="mb-3 text-4xl ">Create an Account</h1>
          <p>Enter your details Below</p>
          </div>

          <div className="forms">
           <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email or Phone Number" />
            <input type="text" placeholder="Password" />
            <input
              type="submit"
              className="bg-red-500 h-[50px] text-white"
              value="Create Account"
            />
          </form>
         </div>
         <div className="google h-[50px]">
          <img
            className="h-[24px] w-[24px] ml-[23%]"
            src="src/logos/Icon-Google.png"
          />
          <p className="">Sign up with Google</p>
        </div>

        <div className="already-account">
           <p>Already have an Account?</p>
           <p className="underline">Log In</p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
