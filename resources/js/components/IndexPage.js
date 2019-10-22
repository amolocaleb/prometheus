import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class IndexPage extends Component {
    render() {
        return (
            <div class="ip_y1">
                <img src="/images/chef.jpg" />
            </div>
        );
    }
}

if (document.querySelector('#chefContainer'))   {
    ReactDOM.render(<IndexPage />,document.querySelector('#chefContainer'))
}