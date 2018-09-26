import React, { Component } from 'react';

class NewItem extends React.Component {
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
        position: 'absolute',
        left: '5%',
        top: '40%',
        flexDirection: 'space-between',
      }
      const inputOptic = {
        margin: '20px 10px 0px 10px'
      }
      return(
        <div>

          <div class="forms" style={optic}>
            <h3> Add a New Item: </h3>
            <form onSubmit={this.handleSubmit}>

              <label> Name:
                <input style={inputOptic} type="text" onChange={(e)=>this.handleInput('name', e)} />
              </label>

              <label> About:
                <input style={inputOptic} type="text" onChange={(e)=>this.handleInput('about', e)} />
              </label>

              <label> Price:
                <input style={inputOptic} type="text" onChange={(e)=>this.handleInput('price', e)} />
              </label>

              <label> Stock:
                <input style={inputOptic} type="text" onChange={(e)=>this.handleInput('stock', e)} />
              </label>

              <input type="submit" value="Add Item" />
            </form>
          </div>
        </div>
      )
    }
  }


export default NewItem;
