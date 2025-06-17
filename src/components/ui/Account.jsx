function Account() {
  return (
    <>
      <div className=" justify-center flex gap-20   flex-wrap">
        <div className="truck">
          <div className="flex justify-center">
            <img src="src/logos/Truck.png" alt="Truck Logo" />
          </div>

          <div className="texts mt-5">
            <h1 className="text-xl font-bold">FREE AND FAST DELIEVERY</h1>
            <p className="mt-2">Free delivery for all orders over $140</p>
          </div>
        </div>

        <div className="truck">
          <div className="flex justify-center">
            <img src="src/logos/HeadPhone.png" alt="Truck Logo" />
          </div>
          <div className="texts mt-5">
            <h1 className="text-xl font-bold">24/7 CUSTOMER SERVICE</h1>
            <p className="mt-2">Friendly 24/7 customer support</p>
          </div>
        </div>

        <div className="truck">
          <div className="flex flex-wrap justify-center">
            <img src="src/logos/Tick.png" alt="Truck Logo" />
          </div>
          <div className="texts mt-5">
            <h1 className="text-xl font-bold">MONEY BACK GUARANTEE</h1>
            <p className="mt-2">We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
