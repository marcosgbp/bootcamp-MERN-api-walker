import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ApiForm from './components/ApiForm';
import People from './components/People';
import Planets from './components/Planets';
import Films from './components/Films';
import Species from './components/Species';
import Vehicles from './components/Vehicles';
import Starships from './components/Starships';
import NotFound from './components/NotFound';
import Header from './components/Header';
import PeopleRouter from './components/PeopleRouter';

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [starships, setStarships] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const buscarRecurso = (data) => {
    axios.get(`https://swapi.dev/api/${data.categoria}/${data.id}`)
    .then((res) => {
      let respuesta = res.data;
      console.log(respuesta)
        if(data.categoria==="people"){
          setPeople({respuesta});
          setPlanets([]);
          setFilms([]);
          setSpecies([]);
          setVehicles([]);
          setStarships([]);
          setNotFound(false);
        }else if (data.categoria==="planets"){
          setPlanets({respuesta});
          setPeople([]);
          setFilms([]);
          setSpecies([]);
          setVehicles([]);
          setStarships([]);
          setNotFound(false);
        }else if(data.categoria==="films"){
          setFilms({respuesta});
          setPeople([]);
          setPlanets([]);
          setSpecies([]);
          setVehicles([]);
          setStarships([]);
          setNotFound(false);
        }else if(data.categoria==="species"){
          setSpecies({respuesta});
          setPeople([]);
          setPlanets([]);
          setFilms([]);
          setVehicles([]);
          setStarships([]);
          setNotFound(false);
        }else if(data.categoria==="vehicles"){
          setVehicles({respuesta});
          setPeople([]);
          setPlanets([]);
          setFilms([]);
          setSpecies([]);
          setStarships([]);
          setNotFound(false);
        }else if(data.categoria==="starships"){
          setStarships({respuesta});
          setPeople([]);
          setPlanets([]);
          setFilms([]);
          setSpecies([]);
          setVehicles([]);
          setNotFound(false);
        }
    })
    .catch((error)=>{
      setNotFound(true);
      setPeople([]);
      setPlanets([]);
      setFilms([]);
      setSpecies([]);
      setVehicles([]);
      setStarships([])
    });
  }
  return (
    <div className="container">
        <Header/>
        <ApiForm buscarRecurso={buscarRecurso}/>
        <hr/>
        <BrowserRouter>
        <Routes>
          <Route path='/people/:id' element={<PeopleRouter/>}></Route>
        </Routes>
      </BrowserRouter>
        {people.length!=0?<People people={people}/>:""}
        {planets.length!=0?<Planets planets={planets}/>:""}
        {films.length!=0?<Films films={films}/>:""}
        {species.length!=0?<Species species={species}/>:""}
        {vehicles.length!=0?<Vehicles vehicles={vehicles}/>:""}
        {starships.length!=0?<Starships starships={starships}/>:""}
        {notFound?<NotFound/>:""}
    </div>
  );
}

export default App;
