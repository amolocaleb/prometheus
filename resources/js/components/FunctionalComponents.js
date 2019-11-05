import React, {  useContext, useState }    from 'react'
import { Link } from "react-router-dom";
import { PizzaContext, PizzaProvider } from './PizzaContext';
import _ from 'lodash';

export const SinglePizza    =   (props) =>  {
    document.querySelectorAll(".navbar a").forEach(el => {
        el.style.color = "black";
    })
    return(
        <div className="b_y1 container">
        <div className="b_y1_pizza">
            <PizzaProvider value={props} >
                <PizzaContext.Consumer>
                   
                   
                    
                        {
                            (context)   =>  {
                                if(true == context.state.isLoaded )  {
                                    
                                   return( <>
                                    <div className="b_y1_pizza_img"><img src={context.state.pizzaArray[0].pizza_url} className="img-fluid" /></div>
                                    <div className="b_y1_pizza_details">
                                        {<PizzaInfo/>}
                                        {<ToppingsInfo/>}
                                        {<DrinksInfo />}
                                        {<Basket/>}
                                        {<ActionButton state={JSON.stringify(context)} />}
                                    </div>
                                    </>)
                                }
                            }
                                
                            
                        }
                    
                        
                </PizzaContext.Consumer>
            </PizzaProvider>
        </div>
        
    </div>
    )
}


const Basket = ()=> {
    const context =   useContext(PizzaContext)
    // const [contextState,setContextState] =   useState(context.state);
        
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
                                        <span className="basket_btn_minus" onClick={()=> context.state.update({pizza_qty:context.state.pizza_qty-1})}><i className="la la-minus"></i></span>
                                        <span className="basket_qty">{context.state.pizza_qty }</span>
                                        <span className="basket_btn_plus" onClick={()=> context.state.update({pizza_qty:context.state.pizza_qty+1})}><i className="la la-plus"></i></span>
                                    </span>
                                </div>
                            </td>
                            <td> <span className="basket_price">700</span></td>
                            <td><span className="basket_action_item btn btn-danger btn-sm"><i className="la la-trash"></i></span></td>
                        </tr>
                    </tbody>
                </table>
                {console.log(context)}
            </div>
        )
    }

    export const  PizzaInfo =   ()  =>  {
        const pizza =   useContext(PizzaContext)
            return( pizza.state.pizzaArray.map((e, i) => (
                <div key={i}>
                    <h1  className="h2">{e.name}</h1>
                    <div className="sizes">
                        <fieldset className="border p-2">
                            <legend className="w-auto">Pizza Sizes</legend>
                            <input type="radio"

                                data-name="size"
                                name="size"

                                id="sizeSmall"

                                value={e.small}

                                onChange={(evt)=>handleChange(evt,pizza)} />

                            <label htmlFor="sizeSmall">S</label>

                            <input type="radio"

                                data-name="size"
                                name="size"

                                id="sizeMed"

                                value={e.medium}

                                onChange={(evt)=>handleChange(evt,pizza)} />

                            <label htmlFor="sizeMed">M</label>

                            <input type="radio"

                                data-name="size"
                                name="size"

                                id="sizeLarge"

                                value={e.large}

                                onChange={(evt)=>handleChange(evt,pizza)} />

                            <label htmlFor="sizeLarge">L</label>

                        </fieldset>

                    </div>
                </div>
            )));
    }

    export const ToppingsInfo   =   ()  =>  {
        const toppings =   useContext(PizzaContext)
        return (<div className="form-group">
        <fieldset className="border p-2 custom-fieldset">
            <legend>Extra Toppings</legend>
            {toppings.state.toppingsArray.map((el, i) => {
                return (<p key={i}>
                    <label>
                        <input 
                        type="checkbox"
                         value={el.id}
                          data-name="toppings"
                           className="custom_checkbox" 
                           data-price={el.price} 
                           onChange={(evt)=>handleChange(evt,toppings)} /> {el.name}
                    </label>
                </p>);
            })}
        </fieldset>
    </div>);
    }

    export const DrinksInfo =   ()    =>  {
        const drinks = useContext(PizzaContext);
        
        return (<div className="form-group">
                <fieldset className="border p-2 custom-fieldset">
                    <legend>Drinks</legend>
                    {drinks.state.drinksArray.map((el, i) => {
                        return (<p key={i}>
                            <label>
                                <input 
                                type="checkbox" 
                                value={el.id} 
                                data-name="drinks" 
                                className="custom_checkbox" 
                                data-price={el.price} 
                                onChange={(evt)=>handleChange(evt,drinks)} /> {el.name}
                            </label>
                        </p>);
                    })}
                </fieldset>
            </div>);
    }

    export const handleChange =  (evt,context)   =>   {
        
        const { target } = evt;
        const oldState   =   context.state;
        // return;
        
        handleStyles(target);
        // console.log(target); return;
        const { dataset: { name }, value, type } = target;

        console.log([name, value]);
        if ('radio' === type) {
            oldState[`${name}_selected`] ||  (oldState[`${name}_selected`]   =    '') ;
            if (value !== oldState[`${name}_selected`]) {
                // setStates({ [`${name}_selected`]: value });
                oldState[`${name}_selected`]    =   value;
            }
        } else {

            oldState[`${name}_selected`] ||  (oldState[`${name}_selected`]   =    []) ;
            //  debugger;
            let index = oldState[`${name}_selected`].indexOf(value);
            if (index > -1) {
                oldState[`${name}_selected`].splice(index, 1);
                // oldState[`${name}_selected`].indexOf(value).remove();
            } else {
                const current = oldState[`${name}_selected`];
                current.push(value);
                // setStates({ [`${name}_selected`]: current });
                oldState[`${name}_selected`]   =    current;
            }

            console.log(oldState[`${name}_selected`])
        }

        console.log(oldState)

    }

    export const handleStyles   =   (target)    =>  {

        return (target.checked && target.type !== 'radio') ?
            target.parentNode.parentNode.style.cssText = "background:#e4584b;color:#fff" :
            target.parentNode.parentNode.style.cssText = "background:none;color:black";
    }

 const   ActionButton   =   (props)  => {
        // const inBuffer  =   useContext(PizzaContext);
        return (
            <div className="action-button">
                
                <Link   to={{
                    pathname:"/checkout",
                    state:props
                }}
                className="btn btn-sm btn-danger">
                    Checkout
                </Link>
               
                {/* <a href="#" className="btn btn-sm btn-danger">Checkout</a> */}
            </div>
        )
    }

const   theCounter  =   (context,fn,flag)  =>  {
    if  (flag)  {
        if  (!context.pizza_qty)    {
            // context.pizza_qty   =   1;
            fn((prev)=> prev.pizza_qty=1);
        }   else   {
            // context.pizza_qty   +=  1;
            fn((prev)=> prev.pizza_qty +=1);
        }
        
    }   else    {
        context.pizza_qty = context.pizza_qty   ?  parseInt(context.pizza_qty)-1 :  1;
        if  (!context.pizza_qty)    {
            // context.pizza_qty   =   1;
            fn((prev)=> prev.pizza_qty=1);
        }   else   {
            if(context.pizza_qty   >  1)
                // context.pizza_qty   -=  1;
                fn((prev)=> prev.pizza_qty-=1);
            else
                // context.pizza_qty   =  1;
                fn((prev)=> prev.pizza_qty=1);
        }
        
    }
    console.log(context)
    return context;
}