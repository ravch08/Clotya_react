import { Box, Paper } from "@mui/material";

import { ProductItemsProps } from "../../types/types";
import { ProductButton, ProductPrice, ProductTitle, Review } from "../utils/helper";

const ProductsItem = (props: ProductItemsProps) => {
	return (
		<Paper className="product-item" elevation={0}>
			<div className="card-images">
				<div className="hover-imgs">
					<div className="hover-img hover-img1"></div>
					<div className="hover-img hover-img2"></div>
					<div className="hover-img hover-img3"></div>
					<div className="hover-img hover-img4"></div>
					<img src={props.imgSrc1} alt={props.title} className="card-img1" />
					<img src={props.imgSrc2} alt={props.title} className="card-img2" />
					<img src={props.imgSrc3} alt={props.title} className="card-img3" />
					<img src={props.imgSrc4} alt={props.title} className="card-img4" />
				</div>
				<div className="badge">{props.discount}%</div>
			</div>

			<Box className="card-content" sx={{ padding: "3rem 0" }}>
				<Review review={props.review} />
				<ProductTitle title={props.title} />
				<ProductPrice priceCrossed={props.priceCrossed} price={props.price} />
				<ProductButton handleClick={props.addToCartHandler} />
			</Box>
		</Paper>
	);
};

export default ProductsItem;
