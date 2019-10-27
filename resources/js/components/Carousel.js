import React,{Component} from 'react';
import ReactDOM from 'react-dom'

export default class Carousel extends Component {
    render() {
        return (
            <div id="pizzaCarousel">
                <div id="carouselExampleIndicators" className="carousel slide custom-carousel" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://images.unsplash.com/photo-1539451652256-f485173cab9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <div className="ip_y2_btn_wrapper">
                                    <a href="#" className="btn btn-default bg-red">Order Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.unsplash.com/photo-1499778003268-cbafc6d08bab?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Second slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <div className="ip_y2_btn_wrapper">
                                    <a href="#" className="btn btn-default bg-red">Order Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <div className="ip_y2_btn_wrapper">
                                    <a href="#" className="btn btn-default bg-red">Order Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}