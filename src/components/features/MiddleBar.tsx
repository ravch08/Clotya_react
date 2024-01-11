import { Container, Stack } from "@mui/material";

import CurrencyDropdown from "../ui/CurrencyDropdown";
import SocialsDropdown from "../ui/SocialsDropdown";

import { FollowerProps } from "../../types/types";

const MiddleBar = ({ followers }: FollowerProps) => {
	const million: number =
		followers < 10000000 ? parseInt((followers / 1000000).toFixed(2)) : followers;

	return (
		<div className="middle-bar">
			<Container>
				<Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
					<SocialsDropdown followers={million} />
					<CurrencyDropdown />
				</Stack>
			</Container>
		</div>
	);
};

export default MiddleBar;
