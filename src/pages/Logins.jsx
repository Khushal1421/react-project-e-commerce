function Logins() {
  return (
    <>
      <div className="mt-16 w-[60%] h-[48.813rem] flex justify-between mx-auto">
        {/* Left Side Image */}
        <div className="h-[781px] w-[805px]">
          <img
            src="src/images/sideimage.png"
            alt="phone-image"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Login Form */}
        <div className="w-[32%] mt-60 flex flex-col gap-4">
          {/* Header */}
          <div className="flex flex-col gap-8">
            <h1 className="mb-3 text-4xl tracking-wider">
              Log in to Exclusive
            </h1>
            <p>Enter your details below</p>
          </div>

          {/* Form */}
          <div className="mt-12">
            <form className="flex flex-col gap-10">
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

              <div className="flex justify-between items-center">
                <input
                  type="submit"
                  value="Log In"
                  className="bg-red-500 h-[56px] w-[143px] text-white cursor-pointer"
                />
                <p className="text-red-500 cursor-pointer">Forget Password?</p>
              </div>
            </form>
          </div>

          {/* Optional Google Sign In */}
          {/* 
        <div className="flex border border-black justify-center items-center mt-6 gap-5 py-3 cursor-pointer">
          <img src="src/images/google-logo.png" alt="google" className="w-6 h-6" />
          <p>Sign in with Google</p>
        </div>
        */}
        </div>
      </div>
    </>
  );
}

export default Logins;
