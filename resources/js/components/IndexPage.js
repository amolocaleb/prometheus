import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class IndexPage extends Component {
    render() {
        return (
            <h2>This is Index</h2>
        );
    }
}

if (document.getElementById('south'))   {
    ReactDOM.render(<IndexPage />,document.getElementById('south'))
}