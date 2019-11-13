import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PizzaList from './PizzaList';
import {SinglePizza} from './FunctionalComponents';
import Home from './home';
import {Checkout} from './Checkout';
import Nav from './nav';



const App = ()  =>  (
    
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/pizzalist" component={PizzaList}/>
            
            <Route exact path="/pizzalist/:id" component={SinglePizza}/>
            <Route path="/checkout" component={Checkout} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(<App />,document.querySelector(".app"));