import React,{ useState} from 'react';


export  const Checkout = ({location})=> {

    
        
        
        const[pizza,setPizza]   =   useState(location.state);
        if  (!location.state['pizza_selected'])
                setPizza((prev)=>prev['pizza_selected']=1);
        
        console.log(['state',location.state])
        return (<div className="b_y1">
            Hey
            </div>);
    
}