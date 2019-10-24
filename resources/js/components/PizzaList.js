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
               return( <div key={index} className="classy">
                    {pizza.name}
                </div>)
            });
            console.log(pList)
           
            this.setState({
                pizzas:pList});
            console.log(this.state.pizzas)

        } catch (error) {
            console.log(error);
        }
        
    }

    componentDidMount()  {
        this.getPizzaList();
    }

    
    render(){
        return (
            <section>
                {this.state.pizzas}
            </section>
        )
    }
}

if  (document.querySelector('.pizza-list')) {
    ReactDOM.render(<PizzaList /> ,document.querySelector('.pizza-list'));
}