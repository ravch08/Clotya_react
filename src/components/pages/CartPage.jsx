import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Container, Stack } from '@mui/material';
import { Newsletter } from '../layout/helper';

import { incrementQuantity, decrementQuantity, deleteProduct } from '../../app/cartSlice';

const CartPage = () => {

   const dispatch = useDispatch();
   const { carts, totalPrice, totalQuantity } = useSelector(state => state.cartState);

   return (
      <React.Fragment>
         <section className="cart-page" aria-labelledby='Cart Page'>
            <Container>
               <Stack direction={'row'} spacing={'2rem'} justifyContent={'space-between'}>
                  <div className="product-details">
                     <Box className="opening" mb={'2rem'}>
                        <p>Your order qualifies for free shipping!</p>
                        <div className="red-line"></div>
                     </Box>

                     {carts?.map(item => {
                        const productSubtotal = parseFloat((item.price * item.quantity).toFixed(2));

                        return (
                           <Box sx={{ margin: '0.8rem 0' }} key={item.id}>
                              <Stack direction={'row'} spacing={'2rem'} className='product-info' >
                                 <figure>
                                    <img src={item.imgSrc2} alt={item.title} />
                                    <button className='btn-remove' onClick={() => { dispatch(deleteProduct(item.id)) }}>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="8" fill='white' viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
                                    </button>
                                 </figure>
                                 <Stack direction="column" spacing="1.5rem" alignItems={'flex-start'}>
                                    <h2><Link to="#!">{item.title}</Link></h2>
                                    <p style={{ fontSize: 'var(--fs-h5)' }}>Price: <span>${item.price} </span></p>
                                    <p style={{ fontSize: 'var(--fs-h5)' }}>SubTotal: <span>${productSubtotal}</span></p>
                                    <Stack direction={'row'} spacing={'2rem'} alignItems={'center'} className="quantity" sx={{ fontSize: '1.5rem' }}>
                                       <span>Quantity: </span>
                                       <Stack direction={'row'} className="quantity-item">
                                          <div className="subtract-quantity" onClick={() => { dispatch(decrementQuantity(item.id)) }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" /></svg>
                                          </div>
                                          <label htmlFor="product_quantity">Product Quantity</label>
                                          <input type="text" name="product_quantity" value={item.quantity} onChange={() => null} />
                                          <div className="add-quantity" onClick={() => { dispatch(incrementQuantity(item.id)) }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 448 512"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" /></svg>
                                          </div>
                                       </Stack>
                                    </Stack>
                                 </Stack>
                              </Stack>
                           </Box>
                        )
                     })}
                  </div>

                  <Box className="cart-totals">
                     <div className="cart-header">Cart Totals</div>
                     <Stack direction={'row'} justifyContent={'space-between'} className="subtotal">
                        <span>Subtotal:</span>
                        <span>${totalPrice}</span>
                     </Stack>
                     <Stack direction={'row'} justifyContent={'space-between'} className="subtotal">
                        <span>Quantity:</span>
                        <span>{totalQuantity}</span>
                     </Stack>
                     <Stack direction={'row'} justifyContent={'space-between'} className="shipping">
                        <span>Shipping</span>
                        <span>Free Shipping</span>
                     </Stack>

                     <Stack direction={'row'} justifyContent={'space-between'} className="totals">
                        <span>Total</span>
                        <span className='total-price'>${totalPrice}</span>
                     </Stack>

                     <Link to="#!" className='btn btn-cart'>Checkout</Link>
                  </Box>
               </Stack>
            </Container>
         </section>
         <Newsletter />
      </React.Fragment >
   )
}

export default CartPage;