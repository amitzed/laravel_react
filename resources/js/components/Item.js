import React, { Component } from 'react';


const Item = ({item}) => {
  const optic = {
    display: 'flex',
    flexDirection: 'column',
    width: '65%',
    margin: '30px 10px 10px 30px'
  }
  if(!item) {
    return(<div style={optic}> <h2> Unknown Item </h2> </div>);
  }
  return(
    <div style={optic}>
      <h3> {item.name} </h3>
      <p> {item.about} </p>
      <h5> Price: {item.price} </h5>
      <h5> Status {item.stock ? 'In Stock' : 'No Stock - Please Check Back Later'} </h5>
    </div>
  )
}

export default Item;
