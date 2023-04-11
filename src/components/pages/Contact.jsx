import React from 'react';
import { ContactHero, PageBanner, Newsletter } from '../layout/helper';

const Contact = () => {

   return (
      <React.Fragment>
         <PageBanner imgSrc={ContactHero} title="Contact" />
         <Newsletter />
      </React.Fragment>
   );
};

export default Contact;