import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import IndexPage from './IndexPage';
import PizzaList from './PizzaList';
import {SinglePizza} from './FunctionalComponents';



const App = ()  =>  (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={IndexPage,PizzaList}/>
            <Route exact path="/pizzalist" component={PizzaList}/>
            <Route exact path="/pizzalist/:id" component={SinglePizza}/>
            
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(<App />,document.querySelector("#the_content"));