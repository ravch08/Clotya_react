import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const CurrencyDropdown = () => {
	return (
		<Stack className="language-currency" direction={"row"} spacing={"2rem"}>
			<Link to="#!" style={{ padding: "1.5rem 0", color: "black" }}>
				Order Tracking
			</Link>

			<div className="lc-item">
				<div className="lc-link">
					English
					<svg xmlns="http://www.w3.org/2000/svg" width="8" viewBox="0 0 320 512">
						<path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
					</svg>
				</div>
				<ul className="dropdown-menu">
					<li>
						<Link to="#!">English</Link>
					</li>
					<li>
						<Link to="#!">Spanish</Link>
					</li>
					<li>
						<Link to="#!">German</Link>
					</li>
				</ul>
			</div>

			<div className="lc-item">
				<div className="lc-link">
					INR
					<svg xmlns="http://www.w3.org/2000/svg" width="8" viewBox="0 0 320 512">
						<path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
					</svg>
				</div>
				<ul className="dropdown-menu">
					<li>
						<Link to="#!">INR</Link>
					</li>
					<li>
						<Link to="#!">USR</Link>
					</li>
					<li>
						<Link to="#!">EUR</Link>
					</li>
				</ul>
			</div>
		</Stack>
	);
};

export default CurrencyDropdown;
