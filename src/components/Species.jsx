import React from "react";

const Species = ({ species }) => {
  let {
    name,
    classification,
    designation,
    average_height,
    skin_colors,
    hair_colors,
    eye_colors,
  } = species.respuesta;
  return (
  <div className="card">
    <div className="card-header">
      <h1>Species</h1>
    </div>
    <div className="body">
      <ul>
          <ol><strong>Name: </strong>{name}</ol>
          <ol><strong>Classification: </strong>{classification}</ol>
          <ol><strong>Designation: </strong>{designation}</ol>
          <ol><strong>Average height: </strong>{average_height}</ol>
          <ol><strong>Skin colors: </strong>{skin_colors}</ol>
          <ol><strong>Hair colors: </strong>{hair_colors}</ol>
          <ol><strong>Eye colors: </strong>{eye_colors}</ol>
      </ul>      
    </div>
  </div>);
};

export default Species;
