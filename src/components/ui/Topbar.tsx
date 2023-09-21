import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Topbar = () => {
	return (
		<Box
			className="topbar"
			sx={{ backgroundColor: "var(--color-secondary)", py: "1rem", textAlign: "center" }}
		>
			<Container>
				<p style={{ color: "white", fontSize: "var(--fs-topbar)" }}>
					SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL DELIVERY - OFF 50%!
					<Link to="#!" style={{ color: "white", fontWeight: "bold", marginLeft: "2rem" }}>
						SHOP NOW
					</Link>
				</p>
			</Container>
		</Box>
	);
};

export default Topbar;
