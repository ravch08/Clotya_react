import { Link } from "react-router-dom";

const ProductTitle = (props: { title: string }) => {
	return (
		<Link to="#!">
			<h3>{props.title}</h3>
		</Link>
	);
};

export default ProductTitle;
