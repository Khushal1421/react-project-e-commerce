function Perfume() {
    return (
      <>
        <div className="bg-black  w-[270px] h-[284px] relative text-white">
        <div className="absolute mt-[10rem] ml-[1.6rem]">
            <div className="">
              <h2 className="text-2xl font-medium">Perfume</h2>
            </div>
            <div>
              <p className="text-xs mt-[0.5rem]">
               GUCCI INTENSE OUD EDP
              </p>
            </div>
            <div className="mt-[0.7rem]">
              <p className="  ">Shop Now</p>
              <hr className="w-[4.7rem] "></hr>
            </div>
          </div>
          <div className=" pt-[2rem]">
            {" "}
            {/*Why does giving mt here shifts whole box? Padding Worked */}
            <img
              className="mx-auto  "
              src="src/images2/perfume.png"
              alt="Amazon Speaker"
            />
          </div>
          
        </div>
      </>
    );
  }
  
  export default Perfume;