//                     <img src="src/images/redGamePad.png" alt="GamePad" />

//                     <img src="src/images/redGamePad.png" alt="GamePad" />
{/* <img src="src/payment-images/image 32 (1).png" /> */}

//                   <img src="src/payment-images/image 30 (1).png" />
// <img src="src/payment-images/image 31 (1).png" />
//                   <img src="src/payment-images/image 33 (1).png" />

import redGame from '../images/redGamePad.png';
import gamingMonitor from '../images/gamingMonitor.png';
import visa from '../../payment-images/visa.png';
import mastercard from '../../payment-images/mastercard.png';
import bkash from '../../payment-images/bkash.png';
import sanskrit from '../../payment-images/sanskrit.png';

function CheckOut() {
  return (
    <>
      <div className="main w-[100%] sm:w-[85%] mx-auto mt-[4rem]">
        <div className="flex gap-1 sm:gap-3">
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

        <div className="mt-20 flex justify-between gap-10 flex-col lg:flex-row  ">
          <div className="billing-detail w-full lg:w-[40%] ">
            <h1 className="text-3xl">Billing Details</h1>
            <div className=" mt-10 flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <label>First Name</label>
                <input type="text" className='bg-neutral-100 flex-1 py-3 px-2' />
              </div>
              <div className="flex flex-col gap-3">
                <label>Company Name</label>
                <input type="text" className='bg-neutral-100 flex-1 py-3 px-2' />

              </div>

              <div className="flex flex-col gap-3">
                <label>Street Address</label>
                <input type="text" className='bg-neutral-100 flex-1 py-3 px-2' />

              </div>

              <div className="flex flex-col gap-3">
                <label>Apartment,floor, etc. (optional)</label>
                <input type="text" className='bg-neutral-100 flex-1 py-3 px-2' />

              </div>

              <div className="flex flex-col gap-3">
                <label>Town/City</label>
                <input type="text" className='bg-neutral-100 flex-1 py-3 px-2' />

              </div>

              <div className="flex flex-col gap-3">
                <label>Phone Number</label>
                <input type="text" className='bg-neutral-100 flex-1 py-3 px-2' />
              </div>

              <div className="flex flex-col gap-3">
                <label>Email Address</label>
                <input type="text" className='bg-neutral-100 flex-1 py-3 px-2' />
              </div>
              <div className="flex gap-4 mt-5">
                <input type="checkbox" className='accent-red-500 w-7 h-7 rounded-full' />
                <p>Save this information for faster check-out next time</p>
              </div>
            </div>
          </div>

          <div className="products mt-[6.8rem] flex flex-col gap-[32px]  ">
            <div>
              <div className="product flex justify-between">
                <div className="one-product flex gap-3 items-center">
                  <div className="h-[54px] w-[54px]">
                    <img src={redGame} alt="GamePad" />
                  </div>
                  <p>H1 GamePad</p>
                </div>
                <p>$650</p>
              </div>
              <div className="product flex justify-between">
                <div className="one-product flex gap-3 items-center">
                  <div className="h-[54px] w-[54px]">
                    <img src={gamingMonitor} alt="GamePad" />
                  </div>
                  <p>LCD Monitor</p>
                </div>
                <p>$1100</p>
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
                <input type="radio" className='w-5 h-5 accent-black' name='payment' />
                <p>Bank</p>
              </div>
              <div className="flex">
                <div className="w-[42px] h-[28px]">
                  <img src={bkash} />
                </div>
                <div className="w-[42px] h-[28px]">
                  <img src={visa} />
                </div>
                <div className="w-[42px] h-[28px]">
                  <img src={mastercard} />
                </div>
                <div className="w-[42px] h-[28px]">
                  <img src={sanskrit} />
                </div>
              </div>
            </div>

            <div className="cash flex gap-3">
              <input type="radio" className='w-5 h-5 accent-black' name='payment' />
              <p>Cash on Delievery</p>
            </div>

            <div className="flex gap-3">
                <input type="text" className='flex-1 border  px-3' placeholder='Coupon Code' />
                <div className="border flex justify-center text-white bg-[#db4543] items-center py-2 px-6">
                   Apply Coupon
                </div>
            </div>
            <div className="border flex w-[35%] lg:w-[50%] px-4 py-3 justify-center text-white bg-[#db4543] items-center ">
                   Place Order
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
