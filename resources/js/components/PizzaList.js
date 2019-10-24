import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
            let response = await axios.get('/pizzalist');
            let pizzaArray = response.data;
            console.log({pizzaArray,response});

            let pList = pizzaArray.map( (pizza,index) => {
               return( <div key={index} className="pizza-item">
                    

                    <div className="py_item">
                        <div className="card rounded">
                            <div className="card-image">
                                
                                <img className="img-fluid" src={pizza.pizza_url} alt={`Photo of ${pizza.name}`} />
                            </div>
                        
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5>{pizza.name}</h5>
                                    <div className="prices">
                                        <span>From {pizza.LowPrice}</span> - <span>To {pizza.MaxPrice}</span>
                                    </div>
                                </div>
                                <a className="btn btn-sm btn-danger" href={`/pizzalist/${pizza.p_id}`}>Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>)
            });
           
           
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
            <section className="pl_y1 container">
                {this.state.pizzas}
            </section>
        )
    }
}

if  (document.querySelector('.pizza-list')) {
    ReactDOM.render(<PizzaList /> ,document.querySelector('.pizza-list'));
}