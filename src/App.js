import "./App.css";
import Card from "./components/Card/Card.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import { useState } from "react";
import axios from "axios";
import {Routes, Route, useLocation} from 'react-router-dom'
import PathRoutes from './helpers/Routes.helper'

function App() {
  const [characters, setCharacters] = useState([])

  const onSearch = (id) =>{
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
    if (data.name) {
       const exist = characters.findIndex((char) =>{
         return char.id === Number(id)
       })
      if (exist === -1){
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡Ya existe hay un personaje con ese ID!')
      }
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
 }
 const randomSearch = () =>{
let random = Math.floor(Math.random() * 826) + 1
  axios(`https://rickandmortyapi.com/api/character/${random}`).then(({ data }) => {
  if (data.name) {
     const exist = characters.findIndex((char) =>{
       return char.id === Number(random)       
     })
    if (exist === -1){
      setCharacters((oldChars) => [...oldChars, data]);
    } else {
      window.alert(`Sorteado: ${random}¡Ya existe hay un personaje con ese ID!`)
    }
     } 
  });
}
 const onClose = (id)=>{
const filter = characters.filter((char) =>{
  return char.id !== Number(id)
})
setCharacters(filter)
 }
 
 const usePathname = () => {
  
  const location = useLocation();
  console.log(location.pathname)
  if (location.pathname !== PathRoutes.HOME && location.pathname !== PathRoutes.ABOUT && location.pathname !== PathRoutes.DETAIL)
  return location.pathname;
}
let errorPath = usePathname()
  return (
    <div className="App">
<Nav onSearch={onSearch} randomSearch={randomSearch}/>
<Routes>
  
  <Route path={errorPath} element = {<Error/>}/>
  <Route path={PathRoutes.HOME} element= {<Cards characters={characters} onClose = {onClose}/>}/>
  <Route path={PathRoutes.ABOUT} element= {<About/>}/>
  <Route path={PathRoutes.DETAIL} element= {<Detail/>}/>

</Routes>
    
    </div>
  );
}

export default App;
