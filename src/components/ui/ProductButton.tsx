const ProductButton = (props: { handleClick: () => void }) => {
	return (
		<button className="btn btn-cart" onClick={() => props.handleClick}>
			Add to Cart
		</button>
	);
};

export default ProductButton;
