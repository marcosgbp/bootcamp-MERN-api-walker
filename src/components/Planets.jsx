import React from 'react'

const Planets = ({planets}) => {
    let {name, rotation_period, orbital_period, climate, diameter} = planets.respuesta
  return (
    <div className='card'>
      <div className="card-header">
        <h1>Planet</h1>
      </div>
      <div className="card-body">
        <ul>
            <ol><strong>Name:</strong>{name}</ol>
            <ol><strong>Rotation period: </strong>{rotation_period}</ol>
            <ol><strong>Orbital period: </strong>{orbital_period}</ol>
            <ol><strong>Climate: </strong>{climate}</ol>
            <ol><strong>Diameter: </strong>{diameter}</ol>
        </ul>      
      </div>  
    </div>
  )
}

export default Planets