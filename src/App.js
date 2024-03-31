// import React, { Component } from 'react'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Home from './components/Home'
// import {AddProducts} from './components/AddProducts';
// import  ProductsProvider  from './global/ProductsContext';

// require('events').EventEmitter.defaultMaxListeners = 15;
// export class App extends Component   {
//  render(){

   
//    return (
//      <>
//     <ProductsProvider>

//     <BrowserRouter>
//     <Routes>
//       <Route exact path="/" element={<Home />} />
//       <Route exact path="/addproducts" element={<AddProducts/>} />
//     </Routes>
//   </BrowserRouter>
//     </ProductsProvider>
//     </>
//   )
// }
// }


// export default App

import React,{useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { AddProducts } from './components/AddProducts';
import  ProductsProvider  from './global/ProductsContext';
import {Signup} from './components/Signup';
import Login from './components/Login';
import { auth, db } from './config/Config';
import { CartContextProvider } from './global/CartContext';
import Cart from './components/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cashout from './components/Cashout';
import NotFound from './components/NotFound';
const App = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const snapshot = await db.collection('SignedUpUsersData').doc(user.uid).get();
        setUser(snapshot.data().Name);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup function to prevent memory leaks
  }, []);

  return (
    <div>

      <ToastContainer />
    <ProductsProvider>
      <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home user={user}/>} />
          <Route path="/addproducts" element={<AddProducts />} />
          <Route path='signup' element={<Signup/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='/cartproducts' element={<Cart  user={user}/>} />
          <Route path='/cashout' element={<Cashout user={user} />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </ProductsProvider>
    </div>
  );
};

export default App;
