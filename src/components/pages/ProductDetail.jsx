import React from 'react';
import { Container, Stack } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import { ProductPrice, Review, Newsletter } from "../layout/helper";

const ProductDetail = props => {

   return (
      <React.Fragment>
         <div className="product-pageInfo">
            <Container>
               <Stack direction={'row'}>
                  <Swiper
                     loop={true}
                     speed={1500}
                     spaceBetween={30}
                     grabCursor={true}
                     navigation={true}
                     centeredSlides={true}
                     modules={[Navigation]}

                     breakpoints={{
                        768: {
                           slidesPerView: 1
                        },
                     }}
                  >
                     <SwiperSlide>
                        <div className="product-swiper">
                           <img src={props.imgSrc1} alt="" />
                        </div>
                     </SwiperSlide>

                  </Swiper>

                  <div className="product-description">
                     <h1>Nylon Puffer Gilet <div className="badge">In Stock</div></h1>
                     <Review review={props.review} />
                     <ProductPrice priceCrossed={props.priceCrossed} price={props.price} />

                     <p>{props.description}</p>

                     <Stack direction={'row'}>
                        <Stack direction={'row'} className="quantity">
                           <label className="screen-reader-text" htmlFor="quantity">Nylon Puffer Gilet quantity</label>
                           <div className="quantity-button minus">-</div>
                           <input type="text" className="input-qty" name="quantity" value="1" size="4" min="1" max="" step="1" inputMode="numeric" autoComplete="off" onChange={() => { }} />
                           <div className="quantity-button plus">+</div>
                        </Stack>
                        <div className="btn btn-checkout">Add to Cart</div>
                     </Stack>
                  </div>
               </Stack >
            </Container>
         </div >
         <Newsletter />
      </React.Fragment>

   )
}

export default ProductDetail;