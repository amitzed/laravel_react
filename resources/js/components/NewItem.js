import React, { Component } from 'react';

class NewItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: {
        name: '',
        about: '',
        price: 0,
        stock: 0
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(key, e) {
    var state = Object.assign({}, this.state.newItem);
    state[key] = e.target.value;
    this.setState({ newItem: state });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.newItem);
  }

    render() {
      const optic = {

      }
      return(
        <div>
          <h3> Add a New item </h3>
          <div style={optic}>
            <form onSubmit={this.handleSubmit}>

              <label> Name:
                <input type="text" onChange={(e)=>this.handleInput('name', e)} />
              </label>

              <label> About:
                <input type="text" onChange={(e)=>this.handleInput('about', e)} />
              </label>

              <label> Price:
                <input type="text" onChange={(e)=>this.handleInput('price', e)} />
              </label>

              <label> Stock:
                <input type="text" onChange={(e)=>this.handleInput('stock', e)} />
              </label>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      )
    }
  }

export default NewItem;
