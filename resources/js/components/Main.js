import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Main extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: null
    }
  }
  componentDidMount() {

  }
    renderItems() {
      return this.state.items.map(item => {
        return (
          <li onClick={ ()=>this.handleClick(item)}
            key={item.id} >
            { item.name }
          </li>
        );
      })
    }
    handleClick(item){
      this.setState({currentItem:item});
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
