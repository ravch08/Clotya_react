const ProductPrice = (props: { price: number; priceCrossed: number | string }) => {
	const priceCrossClass = props.priceCrossed ? "price-crossed" : "d-none";

	return (
		<div className="price-group">
			<span className={priceCrossClass}> ${props.priceCrossed}</span>
			<span className="price">${props.price}</span>
		</div>
	);
};

export default ProductPrice;
