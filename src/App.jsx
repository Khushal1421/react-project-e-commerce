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
import ProductDetails from './pages/ProductDetails';

// Below is IMP
import {HashRouter, Route, Routes, Link} from 'react-router-dom';

function App() {

  // My main work here is HomePages Component.Open Headers and Footer Componennt to see work

  return (
    <>
      <HashRouter>
      <Headers /> 
      <Routes> {/*Nested Components SEE LAteR */}
         <Route path="/" element={<HomePages />} /> {/*Example of Passing Component as Prop */}
         <Route path='/home' element={<HomePages />} /> 
         <Route path='/contact' element={<Contact />} />
         <Route path='/about' element={<About />} />
         <Route path='/signup' element={<SignUps />} />
         <Route path='/login' element={<Logins />} />
         <Route path='/wishlist' element={<WishList />} />
         <Route path='/cart' element={<Cart />} />
         <Route path="/checkout" element={<CheckOut />} />
         <Route path="/account" element={<Account />} />
         <Route path="/productDetails" element={<ProductDetails />} />
         <Route path='*' element={<NotFound />} />

      </Routes>

      <Footer />

      </HashRouter>

      
    </>
  )
}

export default App
