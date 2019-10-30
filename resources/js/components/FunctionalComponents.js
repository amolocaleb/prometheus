import React, { Component } from 'react'
import axios from 'axios';


export class SinglePizza extends Component {

    constructor(props) {
        super(props);

        this.state = { singleData: {} }
        this.handleChange = this.handleChange.bind(this);
        backpack({pizza:{qty:1}});
    }

    async handleChange(evt) {


        const { target } = evt;
        this.handleStyles(target);
        // console.log(target); return;
        const { dataset: { name }, value, type } = target;

        console.log([name, value]);
        if ('radio' === type) {
            this.state[name] || await this.setState({ [name]: '' });
            if (value !== this.state[name]) {
                this.setState({ [name]: value });
            }
        } else {

            this.state[name] || await this.setState({ [name]: [] });
            //  debugger;
            let index = this.state[name].indexOf(value);
            if (index > -1) {
                this.state[name].splice(index, 1);
                // this.state[name].indexOf(value).remove();
            } else {
                const current = this.state[name];
                current.push(value);
                this.setState({ [name]: current });
            }

            console.log(this.state[name])
        }

        console.log(this.state)

    }

    async  getPizza() {

        try {
            const response = await axios.get(`/api/pizzalist/${this.props.match.params.id}`);
            const pizzaArray = response.data.pizza;
            const toppingsArray = response.data.toppings;
            const drinksArray = response.data.drinks;
            
            let pizza = pizzaArray.map((e, i) => (
                <div key={i}>
                    <h1 key={i} className="h2">{e.name}</h1>
                    <div className="sizes">
                        <fieldset className="border p-2">
                            <legend className="w-auto">Pizza Sizes</legend>
                            <input type="radio"

                                data-name="size"
                                name="size"

                                id="sizeSmall"

                                value={e.small}

                                onChange={this.handleChange} />

                            <label htmlFor="sizeSmall">S</label>

                            <input type="radio"

                                data-name="size"
                                name="size"

                                id="sizeMed"

                                value={e.medium}

                                onChange={this.handleChange} />

                            <label htmlFor="sizeMed">M</label>

                            <input type="radio"

                                data-name="size"
                                name="size"

                                id="sizeLarge"

                                value={e.large}

                                onChange={this.handleChange} />

                            <label htmlFor="sizeLarge">L</label>

                        </fieldset>

                    </div>
                </div>



            ));

            let toppingsWrapper = <div className="form-group">
                <fieldset className="border p-2 custom-fieldset">
                    <legend>Extra Toppings</legend>
                    {toppingsArray.map((el, i) => {
                        return (<p key={i}>
                            <label>
                                <input type="checkbox" value={el.id} data-name="toppings" className="custom_checkbox" data-price={el.price} onChange={this.handleChange} /> {el.name}
                            </label>
                        </p>);
                    })}
                </fieldset>
            </div>;
            let drinks = <div className="form-group">
                <fieldset className="border p-2 custom-fieldset">
                    <legend>Drinks</legend>
                    {drinksArray.map((el, i) => {
                        return (<p key={i}>
                            <label>
                                <input type="checkbox" value={el.id} data-name="drinks" className="custom_checkbox" data-price={el.price} onChange={this.handleChange} /> {el.name}
                            </label>
                        </p>);
                    })}
                </fieldset>
            </div>;

            this.setState({
                singleData: {
                    img: <div className="b_y1_pizza_img"><img src={pizzaArray[0].pizza_url} className="img-fluid" /></div>,
                    pizza, toppingsWrapper, drinks
                }
            })

        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getPizza()
    }

    actionButton() {
        return (
            <div className="action-button">
                <a href="#" className="btn btn-sm btn-danger">Checkout</a>
            </div>
        )
    }

    increDecrease(evt,increase) {
        console.log(increase)
        if (!increase)  {
            if (0 !==   backpack().pizza.qty )
                backpack().pizza.qty -= 1;
        }   else{
            backpack().pizza.qty += 1;
        }
        console.log(backpack())
        
    }

    handleStyles(target) {

        return (target.checked && target.type !== 'radio') ?
            target.parentNode.parentNode.style.cssText = "background:#e4584b;color:#fff" :
            target.parentNode.parentNode.style.cssText = "background:none;color:black";
    }

    basket() {
        return (
            <div className="basket">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Price</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                Chicken Pizza
                            </th>
                            <td>
                                <div className="basket-item-qty">

                                    <span className="basket-btn-wrapper">
                                        <span className="basket_btn_minus" onClick={this.increDecrease.bind(null,false)}><i className="la la-minus"></i></span>
                                        <span className="basket_qty">{backpack().pizza.qty}</span>
                                        <span className="basket_btn_plus" onClick={this.increDecrease.bind(null,true)}><i className="la la-plus"></i></span>
                                    </span>
                                </div>
                            </td>
                            <td> <span className="basket_price">700</span></td>
                            <td><span className="basket_action_item btn btn-danger btn-sm"><i className="la la-trash"></i></span></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }

    render() {
        document.querySelectorAll(".navbar a").forEach(el => {
            el.style.color = "black";
        })

        return (
            <div className="b_y1 container">
                <div className="b_y1_pizza">
                    {this.state.singleData.img}
                    <div className="b_y1_pizza_details">
                        {this.state.singleData.pizza}
                        {this.state.singleData.toppingsWrapper}
                        {this.basket()}
                        {this.actionButton()}
                    </div>

                </div>
            </div>
        );
    }

};

const backpack  =   (()  =>  {
    const state = {};
    return  (data = null)  =>  {
        if  (data   !== null)   {
            for (let key in data)  {
                state[key] = data[key];
            }
        }
        
        return state;
    }
})();