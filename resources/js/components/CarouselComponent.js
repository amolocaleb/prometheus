import React,{Component} from 'react';
import ReactDOM from 'react-dom'

export default class CarouselComponent extends Component {
    render() {
        return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="https://images.unsplash.com/photo-1539451652256-f485173cab9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="First slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://images.unsplash.com/photo-1499778003268-cbafc6d08bab?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Second slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Third slide" />
                </div>
             </div>
        </div>
        );
    }
}

if (document.querySelector("#pizzaCarousel"))   {
    ReactDOM.render(<CarouselComponent />,document.querySelector("#pizzaCarousel"));
}
