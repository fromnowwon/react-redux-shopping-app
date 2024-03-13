import React from "react";
import Products from "./Products";

const Home = () => {
	return (
		<div className="hero">
			{/* <img src="/assets/bg.png" className="card-img-top" alt="..." /> */}
			<div className="card border-0">
				<div className="card-body">
					<div className="card-img-overlay d-flex flex-column justify-content-center">
						<div className="container">
							<h5 className="card-title display-3 fw-folder mb-0">
								NEW SEASON ARRIVALS
							</h5>
							<p className="card-text">CHECK OUT ALL THE TRENDS</p>
						</div>
					</div>
				</div>
			</div>
			<Products />
		</div>
	);
};

export default Home;
