function AmazonSpeaker() {
  return (
    <>
      <div className="bg-black w-[270px] h-[284px] relative text-white">
      <div className="absolute mt-[11rem] ml-[2rem]">
          <div className="">
            <h2 className="text-2xl font-medium">Speakers</h2>
          </div>
          <div>
            <p className="text-xs mt-[0.2rem]">
              Amazon wireless speakers
            </p>
          </div>
          <div className="mt-[0.5rem]">
            <p className="  ">Shop Now</p>
            <hr className="w-[4.7rem] "></hr>
          </div>
        </div>
        <div className=" pt-[2rem]">
          {" "}
          {/*Why does giving mt here shifts whole box? Padding Worked */}
          <img
            className="mx-auto  "
            src="src/images2/amazon-speaker.png"
            alt="Amazon Speaker"
          />
        </div>
        
      </div>
    </>
  );
}

export default AmazonSpeaker;
