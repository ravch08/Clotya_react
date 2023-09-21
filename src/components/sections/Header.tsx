import { MiddleBar, Navbar, Topbar } from "../utils/helper";

const Header = () => {
	return (
		<header>
			<Topbar />
			<MiddleBar followers={3100000} />
			<Navbar />
		</header>
	);
};

export default Header;
