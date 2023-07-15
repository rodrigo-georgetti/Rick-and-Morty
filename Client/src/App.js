// Commons imports
import { useEffect, useState } from "react";
import axios from "axios";
// Componenets
import Cards from "./components/Cards/Cards";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Form from "./components/Form/Form";
// Router-Dom
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import Favorites from "./components/Favorites/Favorites";
// Styles
import "./App.css";

const email = "";
const password = "";

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        setCharacters([...characters, data]);
      }
    } catch (error) {
      window.alert("¡No hay personajes con este ID!");
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      {pathname !== "/" && <NavBar onSearch={onSearch} />}
      <Routes>
        <Route path={"/"} element={<Form login={login} />} />
        <Route
          path={"/home"}
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path={"/about"} element={<About />} />
        <Route path={"/detail/:id"} element={<Detail />} />
        <Route path={"/favorites"} element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
