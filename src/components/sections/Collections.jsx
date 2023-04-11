import React from 'react';

import { Box, Rating, Container, Stack } from '@mui/material';
import { Collection1, CollectionsItem } from '../layout/helper';

const Collections = () => {

   return (
      <section className="colections" aria-labelledby='Collections'>
         <Container>
            <Stack direction={{ xs: 'column', lg: 'row' }} justifyContent={'space-between'} alignItems={'center'} spacing={'3rem'}>

               <img src={Collection1} alt="collections" style={{ paddingRight: '3rem' }} />
               <Box sx={{ flexBasis: '45%' }}>

                  <CollectionsItem />

                  <hr style={{ margin: '6rem 0' }} />

                  <Stack direction={'row'} alignItems={'center'} gap={'1rem'}>
                     <Rating name="read-only" value={3} readOnly />
                     <span>4.5 (10.000+) Rating</span>
                  </Stack>
                  <p style={{ padding: '1rem 0' }}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                  <small>Petra van der Meer</small>
               </Box>

            </Stack>
         </Container>
      </section >
   );
};

export default Collections;