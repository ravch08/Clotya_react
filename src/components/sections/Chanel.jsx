import React from 'react';

import { ChanelImg, Signature } from '../layout/helper';
import { Box, Container, Typography } from '@mui/material';

const Chanel = () => {

   return (
      <section
         className='chanel'
         aria-labelledby='Chanel'
         style={{ backgroundColor: 'var(--color-text-secondary)' }}>
         <Container>

            <Box sx={{ textAlign: 'center', width: '80%', marginInline: 'auto' }}>
               <img src={ChanelImg} alt="chanel" />
               <p style={{ fontSize: 'var(--fs-h3)', padding: '4rem 0', color: 'black' }}>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodobendo viverra maecenas accumsan lacus vel facilisis libero.
               </p>
               <img src={Signature} alt="signature" />
               <Typography sx={{ fontSize: 'var(--fs-body)', color: 'var(--color-text-primary)' }}>CHANEL CEO</Typography>
            </Box>

         </Container>
      </section >
   );
};

export default Chanel;