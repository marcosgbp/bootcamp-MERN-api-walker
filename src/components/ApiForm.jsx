import React, { useState, useEffect } from "react";
import axios from "axios";
const initialForm = {
  id: "",
  categoria: "people",
};
const ApiForm = ({ buscarRecurso }) => {
  const [recurso, setRecurso] = useState([]);
  const [formValue, setFormValue] = useState(initialForm);

  useEffect(() => {
    axios.get("https://swapi.dev/api/").then((res) => {
      let resultado = res.data;
      setRecurso({
        resultado,
      });
    });
  }, []);

  const handlerChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    buscarRecurso(formValue);
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <div className="row">
            <div className="col-lg-3">
                <select name="categoria" onChange={handlerChange} className="form-select">
                    {recurso.length === 0 ? (<option>Cargando...</option>) : (
                      Object.keys(recurso.resultado).map((el, index) => (
                        <option key={index}>{el}</option>
                    ))
                    )}
                </select>                
            </div>
            <div className="col-lg-6">
                <input
                    type="number"
                    className="form-control"
                    onChange={handlerChange}
                    name="id"
                    min={1}
                    required
                />
            </div>
            <div className="col-lg-3">
               <input type="submit" value="Buscar" className="btn btn-info" /> 
            </div>
          
        </div>
      </form>
    </div>
  );
};

export default ApiForm;
