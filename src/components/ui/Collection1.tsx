import { Box } from "@mui/material";
import { NewCollection1 } from "../utils/helper";

const Collection1 = () => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "flex-end",
				flexDirection: "column",
				width: { xs: "100%", lg: "54%" },
			}}
		>
			<img src={NewCollection1} alt="couple" />
			<div className="collections-content">
				<p>
					Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
					ultrices gravida.
				</p>
				<span>
					<strong>Petra van der Meer</strong>
				</span>
			</div>
		</Box>
	);
};

export default Collection1;
