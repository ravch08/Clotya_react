import { useEffect } from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import {
	Blog,
	CartPage,
	Contact,
	Error,
	Home,
	Men,
	ProductDetail,
	Shop,
	Women,
} from "./components/utils/helper";

import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "./app/cartSlice";

import Layout from "./components/utils/Layout";
import "./scss/main.scss";

function App() {
	const dispatch = useDispatch();
	const { carts } = useSelector((state) => state.cartState);

	useEffect(() => {
		dispatch(getCartTotal());
	}, [carts]);

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="shop" element={<Shop />} />
				<Route path="women" element={<Women />} />
				<Route path="men" element={<Men />} />
				<Route path="blog" element={<Blog />} />
				<Route path="contact" element={<Contact />} />
				<Route path="cart" element={<CartPage />} />
				<Route path="product/:id" element={<ProductDetail />} />
				<Route path="*" element={<Error />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
