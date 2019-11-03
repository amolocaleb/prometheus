import React,{useState,createContext, useContext,Component} from 'react';


export const DrinksContext    =   createContext();
export const PizzaContext = createContext();
export const ToppingsContext    =   createContext();
export const AppContext =   createContext();


export const DrinksProvider  =   ({children}) =>  {
    const [drinks,SetDrinks]    =   useState([]);
    return (
        <DrinksContext.Provider data={[drinks,SetDrinks]}>
            {children}
        </DrinksContext.Provider>
    )
}
// export const PizzaProvider  =   (props)  =>  {
    
//     const [pizza,setPizza]  =   useState(["Amolo Special"]);

//     return  (
//         <PizzaContext.Provider value={[pizza,setPizza]}>
//             {children}
//         </PizzaContext.Provider>
//     )

// }

export class PizzaProvider  extends Component   {
    constructor(props) {
        super(props);
        this.state  =   {isLoaded:false};
        console.log(props)
    }

    componentDidMount() {
        
        fetch(`/api/pizzalist/${this.props.value.match.params.id}`)
        .then(resp=>resp.json()).then(data=>{
            const pizzaArray = data.pizza;
            const toppingsArray = data.toppings;
            const drinksArray = data.drinks;
            this.setState({isLoaded:true,pizzaArray,toppingsArray,drinksArray});
        });
        
    }

    

    render()    {
        const {isLoaded,pizzaArray,toppingsArray,drinksArray}  =   this.state;
        console.log(this.state)
        return (
        <PizzaContext.Provider value={{
            state:{pizzaArray,isLoaded,toppingsArray,drinksArray}
        }}>
            {this.props.children}
        </PizzaContext.Provider>
        )
    }
}

export const ToppinsProvider    =   ({children}) =>  {
    const [toppings,setToppings]    =   useState([]);
    return (
        <ToppingsContext.Provider data={[toppings,setToppings]}>
            {children}
        </ToppingsContext.Provider>
    )
}

export const AppProvider    =   ({children}) =>  {
    // const [drinks,SetDrinks]    =   useContext(DrinksContext);
    // const [pizza,setPizza]  =   useContext(PizzaContext);
    // const [toppings,setToppings]    =   useContext(ToppingsContext);

    return  (
        <PizzaContext.Provider value={{pizza:[],setPizza:''}}>
           
                    {children}
               
        </PizzaContext.Provider>
    )
}