import React, { Component } from 'react';


const Item = ({item}) => {
  const optic = {

  }
  if(!item) {
    return(<div style={optic}> Unknown Item </div>);
  }
  return(
    <div style={optic}>
      <h3> {item.name} </h3>
      <p> About: {item.about} </p>
      <h5> Price: {item.price} </h5>
      <h5> Stock: {item.stock ? 'In Stock' : 'No Stock - Please Check Back Later'} </h5>
    </div>
  )
}

export default Item;
