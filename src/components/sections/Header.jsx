import React from 'react';
import { Topbar, MiddleBar, Navbar } from '../layout/helper';

const Header = () => {

   return (
      <header>
         <Topbar />
         <MiddleBar followers={3100000} />
         <Navbar />
      </header>
   );
};

export default Header;