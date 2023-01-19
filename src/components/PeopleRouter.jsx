import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PeopleRouter = () => {
    const [people, setPeople] = useState([]);
    const [planetPeople, setPlanetPeople] = useState([])
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then((res) => {
            let resultado = res.data;
            setPeople(
              resultado
            )
            axios.get(resultado.homeworld)
            .then((res)=>{
                let resultadoPlaneta = res.data
                setPlanetPeople(resultadoPlaneta)
            })
          });
    },[])
  return (
<div className='card'>
      <div className="card-header">
        <h1>People</h1>        
      </div>
      <div className="card-body">
        <ul>
            <ol><strong>Name: </strong>{people.name}</ol>
            <ol><strong>Height: </strong>{people.height}</ol>
            <ol><strong>Mass: </strong>{people.mass}</ol>
            <ol><strong>Hair color: </strong>{people.hair_color}</ol>
            <ol><strong>Skin color: </strong>{people.skin_color}</ol>
            <ol><strong>Eye color: </strong>{people.eye_color}</ol>
            <ol><strong>Gender: </strong>{people.gender}</ol> 
        </ul>
        <hr />
        <h3>Datos del planeta</h3>   
        <ul>
            <ol><strong>Name: </strong>{planetPeople.name}</ol>
            <ol><strong>Climate: </strong>{planetPeople.climate}</ol>
        </ul>     
      </div>
    </div>
  )
}

export default PeopleRouter