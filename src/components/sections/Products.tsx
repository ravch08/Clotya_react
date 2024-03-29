import { Container, Stack } from "@mui/material";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../app/cartSlice";

import { ProductProps } from "../../types/types";
import { ProductsItem } from "../utils/helper";

const Products = (props: ProductProps) => {
	const dispatch = useDispatch();
	const allProductItems = useSelector((state) => state.cartState.items);

	return (
		<section className="featured-products" aria-labelledby="Featured Products">
			<Container>
				<Stack
					spacing={"2rem"}
					className="heading"
					justifyContent={"space-between"}
					direction={{ xs: "column", lg: "row" }}
					alignItems={{ xs: "flex-start", lg: "center" }}
				>
					<h2>Featured Products</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quaerat officia
						culpa nostrum voluptatibus voluptates eligendi delectus distinctio facere perspiciatis?
					</p>
				</Stack>

				<Swiper
					loop={true}
					speed={1500}
					spaceBetween={20}
					grabCursor={true}
					centeredSlides={false}
					modules={[Pagination]}
					pagination={{
						clickable: true,
						dynamicBullets: true,
					}}
					breakpoints={{
						356: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1200: {
							slidesPerView: props.items,
						},
					}}
				>
					{allProductItems?.slice(props.num1, props.num2)?.map((productItem) => (
						<SwiperSlide key={productItem.id}>
							<ProductsItem
								title={productItem.title}
								price={productItem.price}
								review={productItem.review}
								imgSrc1={productItem.imgSrc1}
								imgSrc2={productItem.imgSrc2}
								imgSrc3={productItem.imgSrc3}
								imgSrc4={productItem.imgSrc4}
								discount={productItem.discount}
								priceCrossed={productItem.priceCrossed}
								addToCartHandler={() => dispatch(addToCart(productItem))}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</section>
	);
};

export default Products;
