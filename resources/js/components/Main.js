import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    fetch('/api/items')
    .then(response => {
      return response.json();
    })
    .then(items => {
      this.setState({ items });
    });
  }
    renderItems() {
      return this.state.items.map(item => {
        return (
          <li key={item.id}>
            { item.name }
          </li>
        )
      })
    }
    return() {
        return (
          <div>
              <ul> {this.renderItems()}</ul>
          </div>
        );
    }
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
