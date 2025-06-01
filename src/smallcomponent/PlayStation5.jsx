export default function Playstation5() {
  return (
    <>
      <div className="bg-black h-[600px] w-[570px] relative text-white flex flex-wrap content-end">
        <div className="mx-auto">
          <img src="src/images2/PS5.png" alt="PS5" />
        </div>
        <div className="absolute ml-[3.3rem]  mt-[27.5rem]">
          <div className="">
            <h2 className="text-2xl font-medium">PlayStation 5</h2>
          </div>
          <div>
            <p className="text-xs mt-[0.7rem]">
              Black and White version of the PS5 <br />
              coming out on sale.
            </p>
          </div>
          <div className="mt-[1rem]">
            <p className="  ">Shop Now</p>
            <hr className="w-[4.7rem] "></hr>
          </div>
        </div>
      </div>
    </>
  );
}
