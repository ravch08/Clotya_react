import React from 'react';
import { Button } from '../layout/helper';
import { Box, Container } from '@mui/material';

const BannerCollection = () => {

   return (
      <section className="bannerCollection" aria-labelledby='Banner Collection'>
         <Container>
            <Box className="collection-box" sx={{ width: { xs: '100%', lg: '32%' } }}>
               <span >NEW COLLECTIONS</span>
               <h2 style={{ marginTop: '2rem' }}>Best Sweatshirts and <br /> tracksuits for everyone!</h2>
               <p style={{ padding: "3rem 0" }}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
               </p>
               <Button btnText="Shop Now" />
            </Box>
         </Container>
      </section >
   );
};

export default BannerCollection;