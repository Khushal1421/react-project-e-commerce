const SignUps = () => {
    return (
      <div className="mt-16 w-[90%] h-[48.813rem] flex  gap-50 ">
  
        {/* Side Image */}
        <div className="h-[781px] w-[805px]">
          <img src="src/images/sideimage.png" alt="phone-image" className="h-full w-full object-cover" />
        </div>
  
        {/* Sign Up Form */}
        <div className=" mt-32 flex flex-col gap-4">
  
          {/* Heading */}
          <div className="flex flex-col gap-8">
            <h1 className="mb-3 text-4xl tracking-wider">Create an Account</h1>
            <p>Enter your details below</p>
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
            <img
              src="src/logos/Icon-Google.png"
              alt="Google"
              className="h-[24px] w-[24px] ml-[23%]"
            />
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
  