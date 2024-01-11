import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

import { dropdownItems } from "../utils/data";
import { DropdownList } from "../utils/helper";

const Navlist = () => {
	return (
		<ul className="nav-list">
			<li className="nav-item">
				<NavLink to="/" className="nav-link">
					HOME
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink to="shop" className="nav-link">
					SHOP
					<svg xmlns="http://www.w3.org/2000/svg" width="8" viewBox="0 0 320 512">
						<path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
					</svg>
				</NavLink>
				<div className="dropdown-menu">
					<Stack direction={"row"} justifyContent={"space-between"} alignItems={"flex-start"}>
						{dropdownItems.map((dropdownItem) => (
							<DropdownList
								key={dropdownItem.id}
								title={dropdownItem.title}
								listItem1={dropdownItem.listItem1}
								listItem2={dropdownItem.listItem2}
								listItem3={dropdownItem.listItem3}
								listItem4={dropdownItem.listItem4}
								listItem5={dropdownItem.listItem5}
								listItem6={dropdownItem.listItem6}
								listItem7={dropdownItem.listItem7}
							/>
						))}
					</Stack>
				</div>
			</li>
			<li className="nav-item">
				<NavLink to="women" className="nav-link">
					WOMEN
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink to="men" className="nav-link">
					MEN
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink to="blog" className="nav-link">
					BLOG
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink to="contact" className="nav-link">
					CONTACT
				</NavLink>
			</li>
		</ul>
	);
};

export default Navlist;
