import { Container, Stack } from "@mui/material";
import { Collection1, Collection2 } from "../utils/helper";

const NewCollections = () => {
	return (
		<section className="new-collections" aria-labelledby="New Collections">
			<Container>
				<Stack spacing={"8rem"} direction={{ xs: "column", lg: "row" }}>
					<Collection1 />
					<Collection2 />
				</Stack>
			</Container>
		</section>
	);
};

export default NewCollections;
