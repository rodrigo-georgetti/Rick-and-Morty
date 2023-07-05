import "./App.css";
import Card from "./components/Card/Card.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import axios from "axios";

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
 

  return (
    <div className="App">
      <Nav onSearch={onSearch} randomSearch={randomSearch}/>
      <Cards characters={characters} onClose = {onClose}/>
    </div>
  );
}

export default App;
