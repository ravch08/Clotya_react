import { Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";

import { Logo, Navlist, UserInfo } from "../utils/helper";

const Navbar = () => {
	const [sticky, setSticky] = useState("");

	const makeSticky = () => {
		const stickyClass = window.scrollY >= 150 ? "sticky" : "";
		setSticky(stickyClass);
	};

	useEffect(() => {
		window.addEventListener("scroll", makeSticky);
		return () => window.removeEventListener("scroll", makeSticky);
	}, []);

	const sticker = `${sticky}` ? `${sticky} navbar` : "navbar";

	return (
		<div className={sticker}>
			<Container>
				<nav aria-labelledby="Primary Navigation">
					<Stack spacing={"2rem"} direction={"row"} alignItems={"center"}>
						<Logo />
						<Navlist />
					</Stack>
					<UserInfo />
				</nav>
			</Container>
		</div>
	);
};

export default Navbar;
