import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer, Home, Shop, Men, Women, Blog, Contact, Error } from './components/layout/helper';

import './css/index.css';
import './css/main.css';

// https://klbtheme.com/clotya/home-2/#

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='women' element={<Women />} />
        <Route path='men' element={<Men />} />
        <Route path='blog' element={<Blog />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;