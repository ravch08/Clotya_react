import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const FooterItems = (props) => {
	return (
		<Box className="ftr-list">
			<span>{props.heading}</span>
			<ul style={{ marginTop: "1.5rem" }}>
				<li className="ftr-item">
					<Link to={props.link} className="ftr-link">
						{props.item1}
					</Link>
				</li>
				<li className="ftr-item">
					<Link to={props.link} className="ftr-link">
						{props.item2}
					</Link>
				</li>
				<li className="ftr-item">
					<Link to={props.link} className="ftr-link">
						{props.item3}
					</Link>
				</li>
				<li className="ftr-item">
					<Link to={props.link} className="ftr-link">
						{props.item4}
					</Link>
				</li>
				<li className="ftr-item">
					<Link to={props.link} className="ftr-link">
						{props.item5}
					</Link>
				</li>
			</ul>
		</Box>
	);
};

export default FooterItems;
