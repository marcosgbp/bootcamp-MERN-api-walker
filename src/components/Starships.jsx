import React from 'react'

const Starships = ({starships}) => {
    const {name, model, manufacturer, cost_in_credits} = starships.respuesta
  return (
    <div className='card'>
      <div className="card-header">
        <h1>Starships</h1>
      </div>
      <div className="card-body">
        <ul>
          <ol><strong>Name: </strong>{name}</ol>
          <ol><strong>Model: </strong>{model}</ol>
          <ol><strong>Manufacturer: </strong>{manufacturer}</ol>
          <ol><strong>Cost in credits: </strong>{cost_in_credits}</ol>
        </ul>
      </div>  
    </div>
  )
}

export default Starships