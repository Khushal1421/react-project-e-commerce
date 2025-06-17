import Header from './components/Header';
import Headers from './components/Headers';;
import SignUp from './pages/SignUp';
import SignUps from './pages/SignUps' ;
import Login from './pages/Login';
import Logins from './pages/Logins';

import HomePages from './pages/HomePages';
import WishList from './pages/WishList';
import About from './components/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Footer from './components/Footer'

import Cart from '../src/pages/Cart';
import Account from './pages/Account';
import CheckOut from './pages/CheckOut';

function App() {

  // My main work here is HomePages Component.Open Headers and Footer Componennt to see work

  return (
    <>
      <Headers /> 
      {/* <Account /> */}
      {/* <CheckOut /> */}
      {/* <Cart /> */}
      {/* <WishList /> */}
      <HomePages />
      {/* <Logins /> */}
      {/* <SignUps/> */}
      {/* <NotFound /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  )
}

export default App
