import React from "react";
import { ContactHero, Newsletter, PageBanner } from "../utils/helper";

const Contact = () => {
	return (
		<React.Fragment>
			<PageBanner imgSrc={ContactHero} title="Contact" />
			<Newsletter />
		</React.Fragment>
	);
};

export default Contact;
