import { Link } from "react-router-dom";

import { Container, Stack } from "@mui/material";
import { AppStore, GooglePlay, Input } from "../utils/helper";

const Newsletter = () => {
	return (
		<section className="newsletter" aria-labelledby="Newsletter">
			<Container>
				<Stack direction={{ xs: "column", lg: "row" }} spacing={"5rem"}>
					<div className="form">
						<h2>
							Get our emails for info <br /> on new items, sales and more.
						</h2>
						<p style={{ padding: "2rem 0" }}>
							We'll email you a voucher worth £10 off your first order over £50.
						</p>
						<Input />
						<small>
							By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.
						</small>
					</div>

					<div className="contact">
						<h2>
							Need help? <br /> (+800) 1234 5678 90
						</h2>
						<span>We are available 8:00am – 7:00pm</span>
						<figure>
							<Link to="#!">
								<img src={AppStore} alt="App store" />
							</Link>
							<Link to="#!">
								<img src={GooglePlay} alt="Google Play" />
							</Link>
						</figure>
						<small>
							<strong>Shopping App:</strong> Try our View in Your Room feature, manage registries
							and save payment info.
						</small>
					</div>
				</Stack>
			</Container>
		</section>
	);
};

export default Newsletter;
