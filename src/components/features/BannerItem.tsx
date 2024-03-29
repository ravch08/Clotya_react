import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const BannerItem = (props) => {
	return (
		<Box className="banner-item">
			<img src={props.bannerObj.imgSrc} alt={props.bannerObj.title} />
			<Box className="banner-content">
				<span>{props.bannerObj.subtitle}</span>
				<h1>{props.bannerObj.title}</h1>
				<p>{props.bannerObj.description}</p>
				<Link to="#!" className="btn-noBorder">
					{props.bannerObj.btnText}
					<svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 448 512">
						<path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
					</svg>
				</Link>
			</Box>
		</Box>
	);
};

export default BannerItem;
