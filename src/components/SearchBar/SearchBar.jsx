import styles from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar(props) {
  const { onSearch, randomSearch } = props;
const [id, setId] = useState('')
const handleChange = (event )=>{
setId(event.target.value)
}
  return (
    <div>
      <input type="search"
      onChange={handleChange} value={id}
      />
      <button onClick={()=>{onSearch(id)}}>Add Character</button>
      <button onClick={()=>{randomSearch()}}>Random Character</button>
    </div>
  );
}
