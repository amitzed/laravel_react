import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Main extends Component {
    render() {
        return (
            <div>
                <h2>Available Items</h2>
            </div>
        );
    }
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
 
