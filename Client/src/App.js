// * React & config
import "./App.css";
import { useState , useEffect} from "react";
import axios from "axios";
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import PathRoutes from './helpers/Routes.helper'
// * Components
import Card from "./components/Card/Card.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";


function App() {
  const {pathname} = useLocation()
  const [characters, setCharacters] = useState([])
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = 'rodrigo1';
  
  function login(userData) {
     if (userData.password === PASSWORD && userData.email === EMAIL) {
        setAccess(true);
        navigate('/home');
     }
  }
  const onSearch = (id) =>{
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
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
  axios(`http://localhost:3001/rickandmorty/character/${random}`).then(({ data }) => {
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
 useEffect(() => {
  !access && navigate('/');
}, [access]);
 
 

  return (
    <div className="App">
{pathname !== PathRoutes.LOGIN && <Nav onSearch={onSearch} randomSearch={randomSearch}/>}
<Routes>
  
  <Route path={PathRoutes.LOGIN} element={<Form login={login}/>}/>
  <Route path={PathRoutes.HOME} element= {<Cards characters={characters} onClose = {onClose}/>}/>
  <Route path={PathRoutes.ABOUT} element= {<About/>}/>
  <Route path={PathRoutes.DETAIL} element= {<Detail/>}/>
  <Route path='/favorites' element= {<Favorites/>}/>

</Routes>
    
    </div>
  );
}

export default App;
