import React from "react";
import droid from "../img/droids.gif";

const NotFound = () => {
  return (
    <div className="card" style={{width:80+"%"}}> 
      <img src={droid} className="card-img-top" alt="these aren't the droids you're looking for..." />
      <div className="card-body">
        <p className="card-text">
          Petición no encontrada
        </p>
      </div>
    </div>
  );
};

export default NotFound;
