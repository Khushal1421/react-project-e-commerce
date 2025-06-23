function Card({ image, backgroundcolor, color, heading, para }) {
  return (
    <>
      <div className={` mt-10 border rounded-md mx-auto w-[80%] sm:w-full h-[100%] sm:mx-0 bg-${backgroundcolor} text-${color}`} >
        <div className="">
          <div className="image mt-[2rem]">
            <img className="mx-auto" src={image} alt="CashBag" />
          </div>
          <div className=" mt-[1.2rem] ">
            <div className="flex justify-center">
              <h1 className="font-bold text-3xl ">{heading}</h1>
            </div>
            <div className="flex justify-center mt-2">
              <p>{para}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
