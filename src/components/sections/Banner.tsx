import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Box } from "@mui/material";
import { bannerContents } from "../utils/data";
import { BannerItem } from "../utils/helper";

const Banner = () => {
	const bannerContentsList = bannerContents.map((bannerContent) => (
		<SwiperSlide key={bannerContent.id}>
			<BannerItem bannerObj={bannerContent} />
		</SwiperSlide>
	));

	// title={bannerContent.title}
	// 			imgSrc={bannerContent.imgSrc}
	// 			btnText={bannerContent.btnText}
	// 			subtitle={bannerContent.subtitle}
	// 			description={bannerContent.description}

	return (
		<section className="banner" aria-labelledby="Sliding Banner">
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
		</section>
	);
};

export default Banner;
