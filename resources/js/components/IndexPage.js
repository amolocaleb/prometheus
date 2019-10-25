import React, {Component} from 'react';

import CarouselComponent from './Carousel';

export default class IndexPage extends Component {
    render() {
        return (
            <div class="main">
                <div id="chefContainer">
                    <div className="ip_y1 d-flex">
                        <blockquote className="blockquote flex-start">
                            <p className="h1-main mb-0">We don't make pizzas here.we make art </p>
                            <footer className="blockquote-footer"><img src="/storage/2.png" /></footer>
                        </blockquote>
                        

                        <div className="ip_y1_btn_wrapper">
                            <a href="#" className="btn btn-default bg-red">View Pizza List</a>
                        </div>
                        
                    </div>
                </div>
                <CarouselComponent />
            </div>
        );
    }
}

// if (document.querySelector('#chefContainer'))   {
//     ReactDOM.render(<IndexPage />,document.querySelector('#chefContainer'));
// }