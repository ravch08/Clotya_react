import React from 'react';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";

import { BannerItem } from '../layout/helper'
import { bannerContents } from '../layout/Data';
import { Box } from '@mui/material';

const Banner = () => {

   const bannerContentsList = bannerContents.map(bannerContent => <SwiperSlide key={bannerContent.id}>
      <BannerItem
         title={bannerContent.title}
         imgSrc={bannerContent.imgSrc}
         btnText={bannerContent.btnText}
         subtitle={bannerContent.subtitle}
         description={bannerContent.description}
      /> </SwiperSlide>);

   return (
      <section className="banner" aria-labelledby='Sliding Banner'>
         <Box className="banner-wrapper">

            <Swiper
               loop={true}
               speed={1500}
               spaceBetween={5}
               grabCursor={true}
               navigation={true}
               slidesPerView={1}
               centeredSlides={true}
               modules={[Navigation]}
            >
               {bannerContentsList}

            </Swiper>
         </Box>
      </section >
   );
};

export default Banner;