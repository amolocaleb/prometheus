import React, { useState, Component } from "react";
import { ELOOP } from "constants";
import { BrainTreeToken } from "./FunctionalComponents";

export const CheckoutFunc = ({ props }) => {
	console.log(props);

	const cart = JSON.parse(props.location.state.state);

	const pizza = cart.state.pizzaArray[0];
	pizza.qty = cart.state.pizza_qty;
	pizza.price = parseInt(cart.state.size) * pizza.qty;

	pizza.badge = "pizza";
	const items = [];
	let total = parseInt(pizza.price);
	items.push(pizza);
	if (cart.state.drinks_selected.length) {
		cart.state.drinks_selected.forEach(element => {
			let obj = cart.state.drinksArray.find(el => {
				return el.id == parseInt(element);
			});
			if (undefined !== obj) {
				obj.badge = "drinks";
				total += parseInt(obj.price);
				items.push(obj);
			}
		});
	}
	if (cart.state.toppings_selected.length) {
		cart.state.toppings_selected.forEach(element => {
			let obj = cart.state.toppingsArray.find(el => {
				return el.id == parseInt(element);
			});
			if (undefined !== obj) {
				obj.badge = "toppings";
				total += parseInt(obj.price);
				items.push(obj);
			}
		});
	}

	const itemHtml = items.map((el, i) => (
		<li
			key={i}
			className="list-group-item d-flex justify-content-between lh-condensed"
		>
			<div>
				<h6 className="my-0">{el.name}</h6>
				{el.url ? (
					<span>
						<img
							src={el.url}
							alt={el.name}
							className="img-thumbnail"
							srcSet=""
						/>
					</span>
				) : (
					""
				)}
				<small className="ml-2 text-muted">Qty</small>{" "}
				<span className="ml-2 mr-2  small ">{el.qty || 1}</span>
				<span className="badge badge-pill badge-info">{el.badge}</span>
			</div>
			<span className="text-muted">KES {el.price}</span>
		</li>
	));
	console.log([itemHtml, cart.state]);

	//    const token =  BrainTreeToken().then(resp=>resp)

	return (
		<>
			<main id="main" role="main">
				<section id="checkout-container">
					<div className="container">
						<div className="row py-5">
							<div className="col-md-4 order-md-2 mb-4">
								<h4 className="d-flex justify-content-between align-items-center mb-3">
									<span className="text-muted">
										Your cart
									</span>
									<span className="badge badge-secondary badge-pill">
										{items.length}
									</span>
								</h4>
								<ul className="list-group mb-3">
									{itemHtml}
									<li className="list-group-item d-flex justify-content-between">
										<span>Total (KES)</span>
										<strong>KES {total}</strong>
									</li>
								</ul>
							</div>
							<div className="col-md-8 order-md-1">
								<h4 className="mb-3">Billing address</h4>
								<form
									className="needs-validation"
									id="payment-form"
									noValidate
									method="post"
									action="/api/checkout"
								>
									<div className="row">
										<div className="col-md-6 mb-3">
											<label htmlFor="firstName">
												First name
											</label>
											<input
												type="text"
												className="form-control"
												id="firstName"
												placeholder=""
												defaultValue=""
												required
											/>
											<div className="invalid-feedback">
												Valid first name is required.
											</div>
										</div>
										<div className="col-md-6 mb-3">
											<label htmlFor="lastName">
												Last name
											</label>
											<input
												type="text"
												className="form-control"
												id="lastName"
												placeholder=""
												defaultValue=""
												required
											/>
											<div className="invalid-feedback">
												Valid last name is required.
											</div>
										</div>
									</div>

									<div className="mb-3">
										<label htmlFor="address">Address</label>
										<input
											type="text"
											className="form-control"
											id="address"
											placeholder="1234 Main St"
											required
										/>
										<div className="invalid-feedback">
											Please enter your shipping address.
										</div>
									</div>

									<div className="mb-3">
										<label htmlFor="address2">
											Address 2
											<span className="text-muted">
												(Optional)
											</span>
										</label>
										<input
											type="text"
											className="form-control"
											id="address2"
											placeholder="Apartment or suite"
										/>
									</div>

									<hr className="mb-4" />
									<div className="custom-control custom-checkbox">
										<input
											type="checkbox"
											className="custom-control-input"
											id="same-address"
										/>
										<label
											className="custom-control-label"
											htmlFor="same-address"
										>
											Shipping address is the same as my
											billing address
										</label>
									</div>
									<input type="hidden" name="amount" defaultValue={total}/>
									<hr className="mb-4" />

									<h4 className="mb-3">Payment</h4>

									<div className="row d-flex flex-column">
										<div id="dropin-container" />
										<input
											type="hidden"
											name="payment_method_nonce"
											id="nonce"
										/>
										<button
											id="submit-button"
											className="btn btn-primary  btn-sm"
										>
											Confirm Purchase
										</button>
									</div>

									<hr className="mb-4" />
								</form>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export class Checkout extends Component {
	constructor(props) {
		super(props);

		console.log(this.props);
	}
	componentDidMount() {
		BrainTreeToken();
	}

	render() {
		return <CheckoutFunc props={this.props} />;
	}
}
