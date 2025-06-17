const SignUps = () => {
    return (
      <div className="main mt-16 md:w-[90%] flex flex-col  md:flex-row md:justify-between px-4 md:px-0  md:gap-[10vh] lg:gap-[23vh]  ">
  
        {/* Side Image */}
        <div className="">
          <img src="src/images/sideimage.png" alt="phone-image" className="h-full w-full object-cover" />
        </div>
  
        {/* Sign Up Form */}
        <div className=" mt-32 flex flex-col gap-4">
  
          {/* Heading */}
          <div className="flex flex-col gap-8  ">
            <div className="flex justify-center md:block">
              <h1 className="mb-3 text-4xl tracking-wider px-auto">Create an Account</h1>
            </div>
            <div className="flex justify-center md:block">
              <p>Enter your details below</p>
            </div>
            
          </div>
  
          {/* Form */}
          <div className="mt-12">
            <form className="flex flex-col gap-10">
              <input
                type="text"
                placeholder="Name"
                className="border-b border-black py-2 outline-none"
              />
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="border-b border-black py-2 outline-none"
              />
              <input
                type="text"
                placeholder="Password"
                className="border-b border-black py-2 outline-none"
              />
              <input
                type="submit"
                value="Create Account"
                className="bg-red-500 h-[50px] text-white cursor-pointer"
              />
            </form>
          </div>
  
          {/* Google Sign Up */}
          <div className="flex border border-black justify-center items-center mt-6 gap-6 h-[50px] cursor-pointer">
            <div>
            <img
              src="src/logos/Icon-Google.png"
              alt="Google"
              className="h-[24px] w-[24px] ml-[23%]"
            />
            </div>
            
            <p>Sign up with Google</p>
          </div>
  
          {/* Already have account */}
          <div className="flex justify-center gap-4 mt-6">
            <p>Already have an Account?</p>
            <p className="underline cursor-pointer text-blue-600">Log In</p>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default SignUps;
  