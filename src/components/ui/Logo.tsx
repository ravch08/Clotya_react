import { Link } from "react-router-dom";
import { LogoImg } from "../utils/helper";

const Logo = () => {
	return (
		<Link to="/" className="nav-brand">
			<img src={LogoImg} alt="Clotya" width={140} />
		</Link>
	);
};

export default Logo;
