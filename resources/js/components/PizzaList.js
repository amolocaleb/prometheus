import React,{Component} from 'react';

import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import  SinglePizza from './FunctionalComponents';


export default class PizzaList extends Component    {

    constructor()   {
        super();
        this.state  =   {
            pizzas:[]
        }
        console.log(super());
    }
    async getPizzaList(){
        try {
            let response = await axios.get('/api/pizzalist');
            let pizzaArray = response.data;
            

            let pList = pizzaArray.map( (pizza,index) => ( <a key={index} 
                            className="pizza-item " 
                            href={`/pizzalist/${pizza.p_id}`}>
                    

                    <div className="py_item">
                        <div className="card rounded">
                            <div className="card-image">
                                
                                <img className="img-fluid" src={pizza.pizza_url} alt={`Photo of ${pizza.name}`} />
                            </div>
                        
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5>{pizza.name}</h5>
                                    <div className="prices">
                                        <span>From {pizza.small}</span> - <span>To {pizza.large}</span>
                                    </div>
                                </div>
                                <Route>
                                
                                    <button 
                                    role="link"
                                    href={`/pizzalist/${pizza.p_id}`}
                                    className="btn btn-sm btn-danger text-white"
                                    onClick={SinglePizza}
                                    >
                                    Order Now
                                    </button>
                                </Route>
                                
                                
                            </div>
                        </div>
                    </div>
                </a>)
            );
           
           
            this.setState({pizzas:pList});
            

        } catch (error) {
            console.log(error);
        }
        
    }

    componentDidMount()  {
        this.getPizzaList();
    }

    
    render(){
        return (
            <section className="pl_y1">
                {this.state.pizzas}
            </section>
        )
    }
}

// if  (document.querySelector('.pizza-list')) {
//     ReactDOM.render(<PizzaList /> ,document.querySelector('.pizza-list'));
// }