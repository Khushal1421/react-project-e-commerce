function CheckOut() {
  return (
    <>
      <div className="main w-[100%] sm:w-[85%] mx-auto mt-[4rem]">
        <div className="flex gap-3">
          <p className="text-[#909090]">Account</p>
          <p className="text-[#909090]">/</p>
          <p className="text-[#909090]">My Account</p>
          <p className="text-[#909090]">/</p>
          <p className="text-[#909090]">Product</p>
          <p className="text-[#909090]">/</p>
          <p className="text-[#909090]">View Cart</p>
          <p className="text-[#909090]">/</p>
          <p className="">CheckOut</p>
        </div>

        <div className="mt-20 flex justify-between  ">
          <div className="">
            <h1 className="text-3xl">Billing Details</h1>
            <div className="w-[470px] h-[766px] mt-10 flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <label>First Name</label>
                <div className="bg-gray-300 h-[50px] w-full ">
                  <input className="p-2" type="text" size="52" required />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label>Company Name</label>
                <div className="bg-gray-300 h-[50px] w-full ">
                  <input className="p-2" type="text" size="52" required />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label>Street Address</label>
                <div className="bg-gray-300 h-[50px] w-full ">
                  <input className="p-2" type="text" size="52" required />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label>Apartment,floor, etc. (optional)</label>
                <div className="bg-gray-300 h-[50px] w-full ">
                  <input className="p-2" type="text" size="52" required />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label>Town/City</label>
                <div className="bg-gray-300 h-[50px] w-full ">
                  <input className="p-2" type="text" size="52" required />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label>Phone Number</label>
                <div className="bg-gray-300 h-[50px] w-full ">
                  <input
                    className="p-2"
                    type="text"
                    size="52"
                    maxLength="10"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label>Email Address</label>
                <div className="bg-gray-300 h-[50px] w-full ">
                  <input className="p-2" type="text" size="52" required />
                </div>
              </div>
              <div className="flex gap-4">
                <input type="checkbox" />
                <p>Save this information for faster check-out next time</p>
              </div>
            </div>
          </div>

          <div className="products flex flex-col gap-[32px] border">
            <div>
              <div className="product flex justify-between">
                <div className="one-product flex gap-3 items-center">
                  <div className="h-[54px] w-[54px]">
                    <img src="src/images/redGamePad.png" alt="GamePad" />
                  </div>
                  <p>H1 GamePad</p>
                </div>
                <p>$650</p>
              </div>
              <div className="product flex justify-between">
                <div className="one-product flex gap-3 items-center">
                  <div className="h-[54px] w-[54px]">
                    <img src="src/images/redGamePad.png" alt="GamePad" />
                  </div>
                  <p>H1 GamePad</p>
                </div>
                <p>$650</p>
              </div>
            </div>

            <div className="total flex flex-col gap-4">
              <div className="flex justify-between">
                <p>Subtotal:</p>
                <p>$1750</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <p>Total:</p>
                <p>$1750</p>
              </div>
            </div>

            <div className="bank flex justify-between">
              <div className="flex gap-3">
                <input type="radio" />
                <p>Bank</p>
              </div>
              <div className="flex">
                <div className="w-[42px] h-[28px]">
                  <img src="src/payment-images/image 32 (1).png" />
                </div>
                <div className="w-[42px] h-[28px]">
                  <img src="src/payment-images/image 30 (1).png" />
                </div>
                <div className="w-[42px] h-[28px]">
                  <img src="src/payment-images/image 31 (1).png" />
                </div>
                <div className="w-[42px] h-[28px]">
                  <img src="src/payment-images/image 33 (1).png" />
                </div>
              </div>
            </div>

            <div className="cash flex gap-3">
              <input type="radio" />
              <p>Cash on Delievery</p>
            </div>

            <div className="flex gap-3">
                <div className="border flex  items-center w-[300px] h-[56px]">
                   <input type="text" size="34" placeholder="Coupon Code"  />
                </div>
                <div className="border flex justify-center text-white bg-[#db4543] items-center w-[300px] h-[56px]">
                   Apply Coupon
                </div>
            </div>
            <div className="border flex justify-center text-white bg-[#db4543] items-center w-[190px] h-[56px]">
                   Place Order
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
