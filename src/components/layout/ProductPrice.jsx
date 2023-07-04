import React from 'react'

const ProductPrice = (props) => {
   const priceCrossClass = `${props.priceCrossed}` ? 'price-crossed' : 'd-none';
   // const priceCross = `${props.priceCrossed}` ? `$${props.priceCrossed}` : "";

   return (
      <div className="price-group">
         <span className={priceCrossClass}> ${props.priceCrossed && props.priceCrossed}</span>
         <span className='price'>${props.price}</span>
      </div>
   )
}

export default ProductPrice