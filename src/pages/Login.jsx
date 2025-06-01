import '../css-files/Login.css';

export default function Login() {
    return (
      <div className="top-div">
        <div className="mobile-image">
          <img src="src/images/sideimage.png" alt="phone-image" />
        </div>
  
        <div className="log-in">
            <div className="create-account">
            <h1 className="mb-3 text-4xl ">Log in to Exclusive</h1>
            <p>Enter your details Below</p>
            </div>
  
            <div className="forms">
             <form>
              <input type="text" placeholder="Email or Phone Number" />
              <input type="text" placeholder="Password" />
              <div className='logger'>
              <input
                type="submit"
                className="bg-red-500 h-[56px] w-[143px] text-white"
                value="Log In"
              />
              <p className='text-red-500'>Forget Password?</p>
              </div>
              
            </form>
           </div>
           
        </div>
      </div>
    );
  }
  

  