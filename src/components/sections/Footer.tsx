import { Container, Stack } from "@mui/material";

import { footerListItems } from "../utils/data";
import { FooterBar, FooterItems, Logo, ScrollToTop } from "../utils/helper";

const Footer = () => {
	return (
		<footer>
			<Container>
				<Stack direction={{ xs: "column", lg: "row" }} spacing={"3rem"} sx={{ mb: "6rem" }}>
					<div className="ftr-logo">
						<Logo />
						<p>
							Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
							vel facilisis in termapol.
						</p>
						<p>
							<strong>(+800) 1234 5678 90</strong> – info@example.com
						</p>
					</div>
					{footerListItems?.map((footerListItem) => (
						<FooterItems
							key={footerListItem.id}
							item1={footerListItem.item1}
							item2={footerListItem.item2}
							item3={footerListItem.item3}
							item4={footerListItem.item4}
							item5={footerListItem.item5}
							heading={footerListItem.heading}
						/>
					))}
				</Stack>

				<FooterBar />
				<ScrollToTop />
			</Container>
		</footer>
	);
};

export default Footer;
