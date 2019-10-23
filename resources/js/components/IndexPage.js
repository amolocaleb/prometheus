import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class IndexPage extends Component {
    render() {
        return (
            <div class="ip_y1 d-flex">
                <blockquote class="blockquote flex-start">
                    <p class="h1-main mb-0">We don't make pizzas here.we make art </p>
                    <footer class="blockquote-footer"><img src="/images/2.png" /></footer>
                </blockquote>
                

                <div class="ip_y1_btn_wrapper">
                    <a href="#" class="btn btn-default bg-red">Order Now</a>
                </div>
            </div>
        );
    }
}

if (document.querySelector('#chefContainer'))   {
    ReactDOM.render(<IndexPage />,document.querySelector('#chefContainer'))
}