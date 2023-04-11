import React from 'react';

import latestNewsItems from '../layout/Data';
import { LatestNewsItem } from '../layout/helper';
import { Box, Container, Stack } from '@mui/material';

const LatestNews = () => {

   const latestNewsItemsList = latestNewsItems.map(latestNewsItem => <LatestNewsItem
      key={latestNewsItem.id}
      date={latestNewsItem.date}
      title={latestNewsItem.title}
      imgSrc={latestNewsItem.imgSrc}
      category={latestNewsItem.category}
      description={latestNewsItem.description}
   />);

   return (
      <section className='latest-news' aria-labelledby='Our Latest News'>
         <Container>
            <div style={{ textAlign: 'center', marginBottom: '4rem', width: '55%', marginInline: 'auto' }}>
               <h2 style={{ marginBottom: '1.2rem' }}>Our Latest News</h2>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, ducimus! Nobis non harum eius atque, earum aut id soluta. Odio.
               </p>
            </div>
            <Box>
               <Stack direction={{ xs: 'column', lg: 'row' }} spacing={'3rem'}> {latestNewsItemsList} </Stack>
            </Box>
         </Container>
      </section>
   );
};

export default LatestNews;