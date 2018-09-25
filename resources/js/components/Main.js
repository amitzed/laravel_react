import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Item from './Item';
import NewItem from './NewItem';

class Main extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: null
    }

    this.handleNewItem = this.handleNewItem.bind(this);
  }
  componentDidMount() {
    fetch('api/items')
    .then(response => {
      return response.json();
    })
    .then(items => {
      this.setState({ items });
    });
  }
    renderItems() {
      const list = {
        list: 'none',
        fontSize: '19px',
        lineHeight: '1.9em',
      }
      return this.state.items.map(item => {
        return (
          <li style={list}
            onClick={ ()=>this.handleClick(item)}
            key={item.id} >
            { item.name }
          </li>
        );
      })
    }
    handleClick(item){
      this.setState({currentItem:item});
    }
    handleNewItem(item) {
      item.price = Number(item.price);
      fetch('api/items/', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item)
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState((prevState)=> ({
          items: prevState.items.concat(data),
          currentItem : data
        }))
      })

    }

    render() {
        return (
          <div>
            <div>
              <h2>Available Items</h2>
                <ul> { this.renderItems() } </ul>
            </div>
            <Item item={this.state.currentItem} />
          </div>
        );
    }
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
