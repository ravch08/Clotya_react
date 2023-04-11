import React from 'react';

import { Box, Container, Stack } from '@mui/material';
import { NewCollection1, NewCollection2, CollectionsItem } from '../layout/helper';

const NewCollections = () => {

   return (
      <section className="new-collections" aria-labelledby='New Collections'>
         <Container>

            <Stack
               spacing={'8rem'}
               direction={{ xs: 'column', lg: 'row' }}
            >
               <Box sx={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  flexDirection: 'column',
                  width: { xs: '100%', lg: '54%' },
               }}>
                  <img src={NewCollection1} alt="couple" />
                  <div className="collections-content" >
                     <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                     </p>
                     <span><strong>Petra van der Meer</strong></span>
                  </div>
               </Box>

               <Box sx={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  flexDirection: 'column',
                  width: { xs: '100%', lg: '46%' },
               }}>
                  <CollectionsItem />
                  <img src={NewCollection2} alt="collection" style={{ width: '100%', marginTop: '8rem' }} />
               </Box>
            </Stack>

         </Container>
      </section >
   );
};

export default NewCollections;