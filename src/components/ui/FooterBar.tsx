import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { Visa } from "../utils/helper";

const FooterBar = () => {
	return (
		<Stack
			spacing={"2rem"}
			className="footer-bar"
			justifyContent={"space-between"}
			direction={{ xs: "column", lg: "row" }}
			alignItems={{ xs: "flex-start", lg: "center" }}
		>
			<p>
				Copyright 2023 ©<strong>Clotya</strong>. All right reserved.
			</p>
			<img src={Visa} alt="cards" />

			<Stack direction={{ xs: "column", md: "row" }} spacing={"1.2rem"}>
				<Link to="#!">Privacy Policy</Link>
				<Link to="#!">Terms and Conditions</Link>
				<Link to="#!">Returns Policy</Link>
			</Stack>
		</Stack>
	);
};

export default FooterBar;
