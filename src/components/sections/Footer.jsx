import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Stack } from '@mui/material';

import { footerListItems } from '../layout/Data';
import { Logo, FooterBar, FooterItems, ScrollToTop } from '../layout/helper';

const Footer = () => {

   const footerItemsList = footerListItems.map(footerListItem => <FooterItems
      key={footerListItem.id}
      item1={footerListItem.item1}
      item2={footerListItem.item2}
      item3={footerListItem.item3}
      item4={footerListItem.item4}
      item5={footerListItem.item5}
      heading={footerListItem.heading}
   />);

   return (
      <footer>
         <Container>
            <Stack direction={{ xs: 'column', lg: 'row' }} spacing={'3rem'} sx={{ mb: '6rem' }}>

               <div className="ftr-logo">
                  <Link to="/"><img src={Logo} alt="Logo" width={140} /></Link>
                  <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis in termapol.</p>
                  <p><strong>(+800) 1234 5678 90</strong> – info@example.com</p>
               </div>
               {footerItemsList}

            </Stack>

            <FooterBar />
            <ScrollToTop />

         </Container>
      </footer >
   );
};

export default Footer;