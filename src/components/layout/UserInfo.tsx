import React, { useState } from "react";

import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, deleteProduct, incrementQuantity } from "../../app/cartSlice";

const UserInfo = () => {
	const dispatch = useDispatch();
	const [isSidebar, setIsSidebar] = useState(false);
	const [isCart, setIsCart] = useState(false);

	const { carts, totalQuantity } = useSelector((state) => state.cartState);

	const openSidebarHandler = () => setIsSidebar(true);
	const closeSidebarHandler = () => setIsSidebar(false);

	const openCartHandler = () => setIsCart(true);
	const closeCartHandler = () => setIsCart(false);

	const sidebarCartClass = isCart ? "sidebar-cart open" : "sidebar-login";
	const sidebarLoginClass = isSidebar ? "sidebar-login open" : "sidebar-login";

	return (
		<React.Fragment>
			<div className="user-info">
				<Link to="#!" className="user-links user" onClick={openSidebarHandler}>
					<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 448 512">
						<path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
					</svg>
				</Link>

				<Link to="#!" className="user-links search">
					<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 512 512">
						<path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
					</svg>
				</Link>
				<Link to="#!" className="user-links heart">
					<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 512 512">
						<path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" />
					</svg>
				</Link>
				<Link to="#!" className="user-links cart" onClick={openCartHandler}>
					<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 448 512">
						<path d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z" />
					</svg>
					<div className="badge">{totalQuantity}</div>
				</Link>
			</div>

			<div className={sidebarLoginClass}>
				<div className="sidebar-head">
					<h2>Sign In</h2>
					<button id="close-sideLogin" className="close" onClick={closeSidebarHandler}>
						<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 352 512">
							<path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
						</svg>
					</button>
				</div>

				<div className="login-content">
					<form action="#" method="post">
						<input type="text" name="username" placeholder="Username" className="input-username" />
						<input
							type="password"
							name="password"
							placeholder="Password"
							className="input-password"
						/>

						<span className="input-eye">
							<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 576 512">
								<path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" />
							</svg>
						</span>

						<div className="form-row">
							<div className="checkbox">
								<input type="checkbox" name="rememberme" className="input-checkbox" />
								<span className="checkbox-label">Remember me</span>
							</div>
							<span>Lost your password?</span>
						</div>

						<div className="d-flex-column">
							<a href="#!" type="submit" className="btn-submit">
								Sign in
							</a>
							<a href="#!" className="btn-outline">
								Create An Account
							</a>
						</div>
					</form>
				</div>
			</div>

			<div className={sidebarCartClass}>
				<div className="sidebar-head">
					<h2>Your Cart ({totalQuantity})</h2>
					<a href="#" id="close-sideCart" className="close" onClick={closeCartHandler}>
						<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 352 512">
							<path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
						</svg>
					</a>
				</div>

				<div className="cart-content">
					{/* {carts && <span>
                  Your Cart is Empty
                  <svg aria-hidden="true" role="img" focusable="false" width="20" viewBox="0 0 24 24"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M16.4 16.4C16.4 16.4 14.75 14.2 12 14.2C9.25 14.2 7.6 16.4 7.6 16.4M8.7 8.7H8.711M15.3 8.7H15.311M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z"
                        stroke="#111111" stroke-width="1.6" stroke-linecap="round"
                        stroke-linejoin="round">
                     </path>
                  </svg>
               </span>} */}

					{carts?.map((item) => {
						const productSubtotal = parseFloat((item.price * item.quantity).toFixed(2));

						return (
							<Box sx={{ margin: "0.8rem 0", width: "100%" }} key={item.id}>
								<Stack direction={"row"} spacing={"2rem"} className="product-info">
									<figure>
										<img src={item.imgSrc2} alt={item.title} />
										<button
											className="btn-remove"
											onClick={() => {
												dispatch(deleteProduct(item.id));
											}}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="8"
												fill="white"
												viewBox="0 0 352 512"
											>
												<path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
											</svg>
										</button>
									</figure>

									<Stack direction="column" spacing="1.5rem" alignItems={"flex-start"}>
										<h2>
											<Link to="#!">{item.title}</Link>
										</h2>
										<p>
											Price: <span>${item.price} </span>
										</p>
										<p>
											SubTotal: <span>${productSubtotal}</span>
										</p>
										<Stack
											direction={"row"}
											spacing={"2rem"}
											alignItems={"center"}
											className="quantity"
											sx={{ fontSize: "1.3rem" }}
										>
											<span>Quantity: </span>
											<Stack direction={"row"} className="quantity-item">
												<div
													className="subtract-quantity"
													onClick={() => {
														dispatch(decrementQuantity(item.id));
													}}
												>
													<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 448 512">
														<path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
													</svg>
												</div>
												<label htmlFor="product_quantity">Product Quantity</label>
												<input
													type="text"
													name="product_quantity"
													value={item.quantity}
													onChange={() => null}
												/>
												<div
													className="add-quantity"
													onClick={() => {
														dispatch(incrementQuantity(item.id));
													}}
												>
													<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 448 512">
														<path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
													</svg>
												</div>
											</Stack>
										</Stack>
									</Stack>
								</Stack>
							</Box>
						);
					})}
				</div>

				<Link to="/cart" className="btn-outline" onClick={closeCartHandler}>
					Continue Shopping
				</Link>
			</div>
		</React.Fragment>
	);
};

export default UserInfo;
