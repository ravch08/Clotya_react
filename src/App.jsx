import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer, Home, Shop, Men, Women, Blog, Contact, CartPage, ProductDetail, Error } from './components/layout/helper';

import { getCartTotal } from './app/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

import "./scss/main.scss";

function App() {

  const dispatch = useDispatch();
  const { carts } = useSelector(state => state.cartState);

  useEffect(() => { dispatch(getCartTotal()) }, [carts]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/women' element={<Women />} />
        <Route path='/men' element={<Men />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;