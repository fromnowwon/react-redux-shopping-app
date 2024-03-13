import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, delItem } from "../redux/action";

const Cart = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.handleCart);

	const handleAddItem = (product) => {
		dispatch(addItem(product));
	};

	const handleDelItem = (product) => {
		dispatch(delItem(product));
	};

	return (
		<div className="p-4">
			{products.map((product) => {
				return (
					<div className="card p-3 mb-3">
						<div className="card-body row">
							<div className="col-md-4">
								<img
									src={product.image}
									alt={product.title}
									className="object-fit-contain"
									width="200px"
									height="200px"
								/>
							</div>
							<div className="col-md-4">
								<h3>{product.title}</h3>
								<p className="lead fw-bold">
									{product.qty}개 $ {product.qty * product.price}
								</p>
								<button
									className="btn btn-outline-dark me-4"
									onClick={() => handleDelItem(product)}
								>
									<i className="fa fa-minus"></i>
								</button>
								<button
									className="btn btn-outline-dark"
									onClick={() => handleAddItem(product)}
								>
									<i className="fa fa-plus"></i>
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Cart;
