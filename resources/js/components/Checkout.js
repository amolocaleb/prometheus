import React, { useState } from 'react';
import { ELOOP } from 'constants';


export const Checkout = ({ location }) => {



    const cart = JSON.parse(location.state.state);
    // const[pizza,setPizza]   =   useState(location.state);
    // if  (!location.state['pizza_selected'])
    //         setPizza((prev)=>prev['pizza_selected']=1);
    const pizza = cart.state.pizzaArray[0];
    pizza.qty = cart.state.pizza_qty;
    pizza.price = parseInt(cart.state.size)*pizza.qty;
    
    pizza.badge =   "pizza"
    const items = [];
    let total   =   parseInt(pizza.price);
    items.push(pizza);
    if (cart.state.drinks_selected.length) {
        cart.state.drinks_selected.forEach(element => {
            let obj = cart.state.drinksArray.find(el => {
                return el.id == parseInt(element)
            });
            if (undefined !== obj){
                obj.badge   =   "drinks";
                total += parseInt(obj.price);
                items.push(obj);
            }
        });
    }
    if (cart.state.toppings_selected.length) {
        cart.state.toppings_selected.forEach(element => {
            let obj = cart.state.toppingsArray.find(el => {
                return el.id == parseInt(element)
            });
            if (undefined !== obj){
                obj.badge   =   "toppings";
                total += parseInt(obj.price);
                items.push(obj);
            }
                
        });
    }

    const itemHtml    =   items.map((el,i) => (
        
        <li key={i}   className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 className="my-0">{el.name}</h6>
                {
                    el.url ?
                        <span>
                            <img src={el.url} alt={el.name} className="img-thumbnail" srcSet="" />
                        </span>
                        : ''
                }

                <small className="ml-2 text-muted">Qty</small> <span className="ml-2 mr-2  small ">{el.qty || 1}</span>
                <span className="badge badge-pill badge-info">{el.badge}</span>
            </div>
            <span className="text-muted">KES {el.price}</span>
        </li>
        
    ));
    console.log([itemHtml,cart.state])
    return (
        <>
            <main id="main" role="main">
                <section id="checkout-container">
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-md-4 order-md-2 mb-4">
                                <h4 className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="text-muted">Your cart</span>
                                    <span className="badge badge-secondary badge-pill">{items.length}</span>
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
                                <form className="needs-validation" noValidate>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="firstName">First name</label>
                                            <input type="text" className="form-control" id="firstName" placeholder="" defaultValue="" required />
                                            <div className="invalid-feedback">
                                                Valid first name is required.
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="lastName">Last name</label>
                                            <input type="text" className="form-control" id="lastName" placeholder="" defaultValue="" required />
                                            <div className="invalid-feedback">
                                                Valid last name is required.
                                    </div>
                                        </div>
                                    </div>



                                    <div className="mb-3">
                                        <label htmlFor="address">Address</label>
                                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                                        <div className="invalid-feedback">
                                            Please enter your shipping address.
                                </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="address2">Address 2
                                                                    <span className="text-muted">(Optional)</span>
                                        </label>
                                        <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                                    </div>

                                    <div className="row">
                                        <div className="col-md-5 mb-3">
                                            <label htmlFor="country">Country</label>
                                            <select className="custom-select d-block w-100" id="country" required >
                                                <option defaultValue="">Choose...</option>
                                                <option>United States</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid country.
                                    </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="state">State</label>
                                            <select className="custom-select d-block w-100" id="state" required>
                                                <option defaultValue="">Choose...</option>
                                                <option>California</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please provide a valid state.
                                    </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="zip">Zip</label>
                                            <input type="text" className="form-control" id="zip" placeholder="" required />
                                            <div className="invalid-feedback">
                                                Zip code required.
                                    </div>
                                        </div>
                                    </div>
                                    <hr className="mb-4" />
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="same-address" />
                                        <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="save-info" />
                                        <label className="custom-control-label" htmlFor="save-info">Save this information htmlFor next time</label>
                                    </div>
                                    <hr className="mb-4" />

                                    <h4 className="mb-3">Payment</h4>

                                    <div className="row">
                                        <div id="dropin-container"></div>
                                        <button id="submit-button" className="btn btn-primary  btn-sm">Request payment method</button>  
                                    </div>
                                    
                                    <hr className="mb-4" />
                                    {/* <button className="btn btn-primary btn-lg btn-sm" type="submit">Continue to checkout</button> */}
                                </form>
                            </div>
                        </div>
                    </div>
                   
                </section>
            </main>

        </>);

}