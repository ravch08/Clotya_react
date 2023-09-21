import { Button } from "../utils/helper";

const CollectionsItem = () => {
	return (
		<div className="collections-mainContent">
			<span>NEW COLLECTIONS</span>
			<h2 style={{ marginTop: "1rem" }}>
				Best Sweatshirts and <br /> tracksuits for everyone!
			</h2>
			<p style={{ padding: "3rem 0" }}>
				Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
				ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
			</p>
			<Button btnText="Shop Now" />
		</div>
	);
};

export default CollectionsItem;
