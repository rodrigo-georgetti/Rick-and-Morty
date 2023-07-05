import React from 'react'
import styles from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"

const Nav = (props) => {
    const {onSearch, randomSearch} = props
  return (
    <div>
      <SearchBar onSearch={onSearch} randomSearch={randomSearch}/>
    </div>
  )
}

export default Nav
