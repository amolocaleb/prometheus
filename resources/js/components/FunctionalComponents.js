import React,{Component} from 'react'
import axios from 'axios';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default  class SinglePizza extends Component  {

    constructor(props)  {
        super(props);
        
        this.state = {singleData:{}}
    }

    handleChange(evt){
        console.log(evt);
        // this.setState({[evt.target.name]:evt.target.value})
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
            let toppings   =    toppingsArray.forEach((e,i) =>{
                
                        <option key={i} value={e.id} data-value={e.price}>{e.name}</option>
                    
            })
            let toppingsWrapper =   <div className="form-group">
                                        <select name="toppings" multiple>
                                            {toppings}
                                        </select>                
                                    </div>
                                    ;
            this.setState({singleData:{img:<div className="b_y1_pizza_img"><img src={pizzaArray[0].pizza_url} className="img-fluid"/></div>,
                                      pizza,toppingsWrapper}})
            console.log({pizzaArray,toppingsArray,drinksArray});
            // return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getPizza()
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


// export   {SinglePizza};