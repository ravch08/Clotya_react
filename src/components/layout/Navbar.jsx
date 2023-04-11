import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Container, Stack } from '@mui/material';

import { dropdownItems } from './Data';
import { Logo, DropdownList, UserInfo } from '../layout/helper';

const Navbar = () => {

   const [sticky, setSticky] = useState("");

   const makeSticky = () => {
      const stickyClass = window.scrollY > 250 ? 'sticky' : '';
      setSticky(stickyClass);
   };

   useEffect(() => {
      window.addEventListener('scroll', makeSticky);
      return () => window.removeEventListener('scroll', makeSticky);
   }, []);

   const sticker = `${sticky}` ? `${sticky} navbar` : 'navbar';

   const dropdownItemsList = dropdownItems.map(dropdownItem => <DropdownList
      key={dropdownItem.id}
      title={dropdownItem.title}
      listItem1={dropdownItem.listItem1}
      listItem2={dropdownItem.listItem2}
      listItem3={dropdownItem.listItem3}
      listItem4={dropdownItem.listItem4}
      listItem5={dropdownItem.listItem5}
      listItem6={dropdownItem.listItem6}
      listItem7={dropdownItem.listItem7}
   />);

   return (
      <div className={sticker}>
         <Container>
            <nav aria-labelledby='Primary Navigation'>
               <Stack direction={'row'} spacing={'2rem'}>
                  <Link to="/" className='nav-brand'><img src={Logo} alt="Clotya" width="100" /></Link>

                  <ul className="nav-list">
                     <li className="nav-item"><Link to="/" className="nav-link">HOME</Link></li>
                     <li className="nav-item">
                        <Link to="shop" className="nav-link">SHOP
                           <svg xmlns="http://www.w3.org/2000/svg" width="8" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" /></svg>
                        </Link>
                        <div className="dropdown-menu">
                           <Stack direction={'row'} justifyContent={'space-between'} alignItems={'flex-start'}> {dropdownItemsList} </Stack>
                        </div>
                     </li>
                     <li className="nav-item"><Link to="women" className="nav-link">WOMEN</Link></li>
                     <li className="nav-item"><Link to="men" className="nav-link">MEN</Link></li>
                     <li className="nav-item"><Link to="blog" className="nav-link">BLOG</Link></li>
                     <li className="nav-item"><Link to="contact" className="nav-link">CONTACT</Link></li>
                  </ul>
               </Stack>

               <UserInfo />
            </nav>
         </Container >
      </div>
   );
};

export default Navbar; 