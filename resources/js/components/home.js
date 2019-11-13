import React from 'react';
import CarouselComponent from './Carousel';
import IndexPage from './IndexPage';
import PizzaList from './PizzaList';
const Home = () =>  (

        <main id="the_content">
            <div className="main">
                <IndexPage />
                <CarouselComponent />
            </div>
            <div className="pizza-list">
                <PizzaList />
            </div>
        </main>
        
    );


export default Home;