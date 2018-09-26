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
        position: 'absolute',
        left: '35%',
        top: '60%',
        flexDirection: 'space-between',
        marginLeft: '30px'
      }
      const inputOptic = {
        margin: '0px 10px 0px 10px'
      }
      return(
        <div>
          <h3> Add a New item </h3>
          <div style={optic}>
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

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      )
    }
  }

export default NewItem;
