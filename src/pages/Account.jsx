function Account() {
  return (
    <>
      <div className="main mt-20 mx-auto w-[100%] sm:w-[85%]">
        <div className="name-account flex justify-between">
          <div className="flex sm:gap-3">
            <p>Home</p>
            <p>/</p>
            <p>My Account</p>
          </div>
          <div>
            <p>
              Welcome! <span className="text-[#db4543]">Md Rimel</span>
            </p>
          </div>
        </div>

        <div className="mt-25 flex gap-[13rem]">
          <div className="manage-account flex flex-col">
            <p className="font-bold">Manage My Account</p>
            <div className="px-8 mt-2 flex flex-col ">
              <p className="text-[#db4543]">My Profile</p>
              <p className="text-[#808080]">Address Book</p>
              <p className="text-[#808080]">My Payment Options</p>
            </div>

            <p className="font-bold mt-8"> My Orders</p>
            <div className="px-8 mt-2 flex flex-col ">
              <p className="text-[#808080]">My Returns</p>
              <p className="text-[#808080]">My Cancellations</p>
            </div>
            <p className="font-bold mt-8"> My Wishlist</p>
          </div>

          <div className="edit-profile shadow-md">
            <div className=" mx-auto px-30 py-5">
              <h1 className="text-[#db4543] text-md">Edit your Profile</h1>
              <form>


                <div className="names mt-3 flex gap-13">
                  <div className="flex flex-col">
                    <label>First Name </label>
                    <div className="bg-neutral-100">
                      <input type="text" placeholder="Md" />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label>Last Name </label>
                    <div className="bg-neutral-100">
                      <input type="text" placeholder="Rimel" />
                    </div>
                  </div>
                </div>


                <div className="email-address mt-3 flex gap-13">
                  <div className="flex flex-col">
                    <label>Email </label>
                    <div className="bg-neutral-100">
                      <input type="text" placeholder="rimel1111@gmail.com" />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label>Address </label>
                    <div className="bg-neutral-100">
                      <input type="text" placeholder="Kingston, 5236, United State" />
                    </div>
                  </div>
                </div>

                <div className="password mt-5 flex flex-col">
                  <div className="flex flex-col gap-3">
                    <label>Password Changes </label>
                    <div className="bg-neutral-100">
                      <input type="password" placeholder="Current Password" />
                    </div>
                    <div className="bg-neutral-100">
                      <input type="password" placeholder="New Password" />
                    </div>
                    <div className="bg-neutral-100">
                      <input type="password" placeholder="Confirm Password" />
                    </div>
                  </div>

                </div>

                <div className="submit-form flex gap-[5%] mt-[5%] items-center justify-end">
                     <a href='#' >Cancel</a>
                     <input className="bg-[#db4543] text-white px-2 py-2 cursor-pointer rounded-sm" type="submit" value="Save Changes" ></input>
                </div>

                
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
