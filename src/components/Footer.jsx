

// function Footer(){
//     return(
//         <>
//          <div className="bg-black text-white ">

//          </div>
//         </>
//     )
// }

// export default Footer;


function Footer() {
    return (
      <div className="bg-black text-white px-10 mt-[32px] pt-24">
        <div className="flex flex-wrap gap-33  ml-[6%]">
          {/* Column 1 */}
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-bold">Exclusive</h1>
            <h2 className="text-lg font-semibold">Subscribe</h2>
            <p>Get 10% off your first order</p>
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent border-b border-white py-1 placeholder-white outline-none"
            />
          </div>
  
          {/* Column 2 */}
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-bold">Support</h1>
            <p>
              111 Bijoy sarani, Dhaka,
              <br />
              DH 1515, Bangladesh.
            </p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
  
          {/* Column 3 */}
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-bold">Account</h1>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
  
          {/* Column 4 */}
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-bold">Quick Link</h1>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
  
          {/* Column 5 */}
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-bold">Download App</h1>
            <p>Save $3 with App New User Only</p>
            <div className="flex gap-3">
              <img src="src/images/qrcode.png" alt="qr code" className="w-20 h-20" />
              <div className="flex flex-col gap-2">
                <img src='src/images/googleplay.png' alt="Google Store" className="w-24" />
                <img src="src/images/appstore.png" alt="Apple Store" className="w-24" />
              </div>
            </div>
          </div>
        </div>
  
        <hr className="my-6 border-white" />
  
        <p className="text-center text-white pb-4">
          Copyright Rimel 2022. All right reserved
        </p>
      </div>
    );
  }
  
  export default Footer;
  