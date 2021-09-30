import React, { useState } from "react";


// Styles
import "./App.css";
import Buscador from "./components/Buscador/Buscador";
import Getperro from "./components/Getperro/Getperro";

const url = "https://dog.ceo/api/breeds/list/all";



function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);


  const getData = (busqueda) => {
    setLoading(true);
    fetch(url)
      .then(r => r.json())
      .then(result => {
      let listaPerros = Object.keys(result.message);
      let listaPerrosFiltrada = listaPerros.filter (perro => perro.startsWith(busqueda))
      if (busqueda === ""){
        setData(null)
      }else {
      setData(listaPerrosFiltrada);}
      setLoading(false);
      });
  };

  return (
    <div className="App">
      <Buscador getData = {getData}/>
      {data && !loading && data.map(perro => <Getperro key = {perro}  raza = {perro}/>)}
    </div>
  );
}

export default App;
