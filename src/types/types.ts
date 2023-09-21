export type FollowerProps = {
	followers: number;
};

export type ProductProps = {
	num1: number;
	num2: number;
	items: number;
};

export type DropdownItemsProps = {
	id?: number;
	title: string;
	listItem1: string;
	listItem2: string;
	listItem3: string;
	listItem4: string;
	listItem5: string;
	listItem6: string;
	listItem7: string;
};

export type LatestNewsProps = {
	id?: number;
	date: string;
	title: string;
	imgSrc: string;
	category: string;
	description: string;
};

export type ProductItemsProps = {
	id?: number;
	price: number;
	title: string;
	review: number;
	discount: number;
	quantity: number;
	imgSrc1: string;
	imgSrc2: string;
	imgSrc3: string;
	imgSrc4: string;
	description: string;
	priceCrossed: number | string;
	addToCartHandler: () => void;
};

export type InitialStateProps = {
	carts: ProductItemsProps | null[];
	totalPrice: number;
	totalQuantity: number;
	items: ProductItemsProps;
};
