import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Paper } from '@mui/material';

const ProductsItem = (props) => {

   const priceCross = `${props.priceCrossed}` ? `$${props.priceCrossed}` : "";
   const priceCrossClass = `${props.priceCrossed}` ? 'price-crossed' : 'd-none';

   const review = `${props.review}` === "1" ? `${props.review} review` : `${props.review} reviews`;

   return (
      <Paper className='product-item' elevation={0} >
         <div className='card-images'>

            <div className="hover-imgs">
               <div className="hover-img hover-img1"></div>
               <div className="hover-img hover-img2"></div>
               <div className="hover-img hover-img3"></div>
               <div className="hover-img hover-img4"></div>

               <img src={props.imgSrc1} alt={props.title} className='card-img1' />
               <img src={props.imgSrc2} alt={props.title} className='card-img2' />
               <img src={props.imgSrc3} alt={props.title} className='card-img3' />
               <img src={props.imgSrc4} alt={props.title} className='card-img4' />
            </div>

            <div className="badge" >{props.discount}%</div>
            <div className="card-functions" style={{ display: 'none' }}>
               <Link to="#!">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 512 512"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" /></svg>
               </Link>
               <Link to="#!">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 512 512"><path d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z" /></svg>
               </Link>
               <Link to="#!">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 448 512"><path d="M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6 116.77 402.9 153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256 77.18 148.7 41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9z" /></svg>
               </Link>
               <Link to="#!">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 576 512"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" /></svg>
               </Link>
            </div>

         </div>

         <Box className="card-content" sx={{ padding: '3rem 0' }}>
            <div className="review">
               <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 576 512" fill='goldenrod'><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>
               <span>{review}</span>
            </div>
            <Link to="#!"><h3>{props.title}</h3></Link>
            <div className="price-group">
               <span className={priceCrossClass}> {priceCross}</span>
               <span className='price'>${props.price}</span>
            </div>
         </Box>

      </Paper >
   );
};

export default ProductsItem;