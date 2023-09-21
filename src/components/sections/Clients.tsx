import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Container } from "@mui/material";
import { Autoplay } from "swiper/modules";

import { Client1, Client2, Client3, Client4, Client5, Client6 } from "../utils/helper";

const Clients = () => {
	return (
		<section className="clients" aria-labelledby="Clients">
			<Container>
				<Swiper
					loop={true}
					speed={1500}
					spaceBetween={40}
					grabCursor={true}
					modules={[Autoplay]}
					centeredSlides={false}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					breakpoints={{
						350: {
							slidesPerView: 2,
						},

						800: {
							slidesPerView: 4,
						},

						1200: {
							slidesPerView: 6,
						},
					}}
				>
					<SwiperSlide>
						<img src={Client1} alt="client" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={Client2} alt="client" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={Client3} alt="client" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={Client4} alt="client" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={Client5} alt="client" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={Client6} alt="client" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={Client3} alt="client" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={Client4} alt="client" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={Client5} alt="client" />
					</SwiperSlide>
				</Swiper>
			</Container>
		</section>
	);
};

export default Clients;
