import React from 'react';

const People = ({people}) => {
  console.log("Esto tengo de parametro ");
   let {name, height, mass, hair_color, skin_color, eye_color, gender} = people.respuesta;
    
    return (
    <div className='card'>
      <div className="card-header">
        <h1>People</h1>        
      </div>
      <div className="card-body">
        <ul>
            <ol><strong>Name: </strong>{name}</ol>
            <ol><strong>Height: </strong>{height}</ol>
            <ol><strong>Mass: </strong>{mass}</ol>
            <ol><strong>Hair color: </strong>{hair_color}</ol>
            <ol><strong>Skin color: </strong>{skin_color}</ol>
            <ol><strong>Eye color: </strong>{eye_color}</ol>
            <ol><strong>Gender: </strong>{gender}</ol> 
        </ul>        
      </div>
    </div>
  )
}

export default People