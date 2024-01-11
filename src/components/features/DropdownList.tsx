import { Link } from "react-router-dom";
import { DropdownItemsProps } from "../../types/types";

const DropdownList = (props: DropdownItemsProps) => {
	return (
		<ul className="dropdown-list">
			<li className="dropdown-item">
				<Link to="#!" className="dropdown-link title">
					{props.title}
				</Link>
			</li>
			<li className="dropdown-item">
				<Link to="#!" className="dropdown-link">
					{props.listItem1}
				</Link>
			</li>
			<li className="dropdown-item">
				<Link to="#!" className="dropdown-link">
					{props.listItem2}
				</Link>
			</li>
			<li className="dropdown-item">
				<Link to="#!" className="dropdown-link">
					{props.listItem3}
				</Link>
			</li>
			<li className="dropdown-item">
				<Link to="#!" className="dropdown-link">
					{props.listItem4}
				</Link>
			</li>
			<li className="dropdown-item">
				<Link to="#!" className="dropdown-link">
					{props.listItem5}
				</Link>
			</li>
			<li className="dropdown-item">
				<Link to="#!" className="dropdown-link">
					{props.listItem6}
				</Link>
			</li>
			<li className="dropdown-item">
				<Link to="#!" className="dropdown-link">
					{props.listItem7}
				</Link>
			</li>
		</ul>
	);
};

export default DropdownList;
