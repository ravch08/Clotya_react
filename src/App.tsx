import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	Blog,
	CartPage,
	Contact,
	Error,
	Footer,
	Header,
	Home,
	Men,
	ProductDetail,
	Shop,
	Women,
} from "./components/utils/helper";

import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "./app/cartSlice";

import "./scss/main.scss";

function App() {
	const dispatch = useDispatch();
	const { carts } = useSelector((state) => state.cartState);

	useEffect(() => {
		dispatch(getCartTotal());
	}, [carts]);

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/women" element={<Women />} />
				<Route path="/men" element={<Men />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/product/:id" element={<ProductDetail />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
