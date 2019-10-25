import React, { Component } from 'react'
import axios from 'axios';

const SinglePizza   =  async (props)  =>  {

    console.log(props);
    debugger;
    try {
        const response = await axios.get(`/pizzalist/${props.match.params.id}`);
    } catch (error) {
        console.log(error);
    }
    

    return (
        <div>
           Nana
        </div>
    );
};

const clickHandler = (evt)  => {
    evt.preventDefault();
    
    console.log(evt)
}

export  {SinglePizza,clickHandler};