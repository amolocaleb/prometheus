import React,{Component} from 'react'
import axios from 'axios';


export   class SinglePizza extends Component  {

    constructor(props)  {
        super(props);
        
        this.state = {singleData:{}}
        this.handleChange   =   this.handleChange.bind(this);
    }
    
    async handleChange(evt){
        // evt.persist();

        const { type,name, value } = evt.target;
        console.log({type, name, value });
        if  ('radio'    === type    )   {
            this.state[name]    ||  await this.setState({[name]:''});
            if  (value  !==  this.state[name])   {
                this.setState({[name]:value});
            }
        }else   {
            
            this.state[name] ||   await this.setState({[name]:[]});
            //  debugger;
            let index =   this.state[name].indexOf(value);
            if  (index  > -1) {
                this.state[name].splice(index,1);
                // this.state[name].indexOf(value).remove();
            }else{
                const current   =   this.state[name];
                current.push(value);
                this.setState({[name]:current});
            }

            console.log(this.state[name])
        }

        console.log(this.state)
        
    }

    async  getPizza()   {
        // const [selectedValue,setselectedValue]  =   this.state.a;
        try {
            const response = await axios.get(`/api/pizzalist/${this.props.match.params.id}`);
            const pizzaArray = response.data.pizza;
            const toppingsArray = response.data.toppings;
            const drinksArray = response.data.drinks;

            let pizza = pizzaArray.map((e,i) =>  (
                    <div key={i}>
                        <h1 key={i} className="h2">{e.name}</h1>
                    <div className="sizes">
                   <fieldset className="border p-2">
                        <legend className="w-auto">Pizza Sizes</legend>
                            <input type = "radio"
                    
                                    name = "size"
                    
                                    id = "sizeSmall"
                    
                                    value = {e.small}
                    
                                    onChange={this.handleChange} />
                    
                            <label htmlFor = "sizeSmall">S</label>
                    
                            <input type = "radio"
                    
                                    name = "size"
                    
                                    id = "sizeMed"
                    
                                    value = {e.medium}

                                    onChange={this.handleChange}/>
                    
                            <label htmlFor = "sizeMed">M</label>
                    
                            <input type = "radio"
                    
                                    name = "size"
                    
                                    id = "sizeLarge"
                    
                                    value = {e.large} 
                                    
                                    onChange={this.handleChange}/>
                    
                            <label htmlFor = "sizeLarge">L</label>
                    
                        </fieldset>    
                        
                    </div>
                    </div>
                    
                
                
            ));
           
            let toppingsWrapper =   <div className="form-group">
                                        <select name="toppings" multiple onChange={this.handleChange}>
                                            {toppingsArray.map((el,i)   =>  
                                                <option key={i} value={el.id} data-value={el.price}>{el.name}</option>
                                            )}
                                        </select>                
                                    </div>
                                    ;
            let drinks  =   <div className="form-group">
                                <select name="drinks" multiple onChange={this.handleChange}>
                                    {drinksArray.map((el,i)   =>  
                                        <option key={i} value={el.id} data-value={el.price}>{el.name}</option>
                                    )}
                                </select>                
                            </div>
            this.setState({singleData:{img:<div className="b_y1_pizza_img"><img src={pizzaArray[0].pizza_url} className="img-fluid"/></div>,
                                      pizza,toppingsWrapper,drinks}})
            
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getPizza()
    }
    
    actionButton()  {
        return (
            <div className="action-button">
                <a href="#" className="btn btn-sm btn-danger">Checkout</a>
            </div>
        )
    }
    
    render()    {
        document.querySelectorAll(".navbar a").forEach(el => {
            el.style.color = "black";
        })
        
        return (
            <div className="b_y1 container">
            <div  className="b_y1_pizza">
                {this.state.singleData.img}
                <div  className="b_y1_pizza_details">
                {this.state.singleData.pizza}
                {this.state.singleData.toppingsWrapper}
                {this.state.singleData.drinks}
                {this.actionButton()}
                </div>
                
               </div>
            </div>
        );
    }
    
};

const clickHandler = (evt)  => {
    evt.preventDefault();
    
    console.log(evt)
}

export  function ToppingsList(props)  {
    console.log(props.optionData)
    let toppings   =    props.optionData.map((e,i) =>{
                
        <option key={i} value={e.id} data-value={e.price}>{e.name}</option>
    
})
    return (
        {toppings}
    )
}
// export   {SinglePizza};