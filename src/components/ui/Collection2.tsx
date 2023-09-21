import { Box } from "@mui/material";
import { CollectionsItem, NewCollection2 } from "../utils/helper";

const Collection2 = () => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "flex-end",
				flexDirection: "column",
				width: { xs: "100%", lg: "46%" },
			}}
		>
			<CollectionsItem />

			<img src={NewCollection2} alt="collection" style={{ width: "100%", marginTop: "8rem" }} />
		</Box>
	);
};

export default Collection2;
