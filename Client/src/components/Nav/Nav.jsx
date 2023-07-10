import React from 'react'
import styles from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"
import { NavLink } from 'react-router-dom'
import PathRoutes from '../../helpers/Routes.helper'

const Nav = (props) => {
    const {onSearch, randomSearch} = props
  return (
    <div>
        <NavLink to={PathRoutes.HOME}>
        Home
        </NavLink>
        <NavLink to={PathRoutes.ABOUT}>
        About
        </NavLink>
        <NavLink to={'/favorites'}>
        Favorites
        </NavLink>
      <SearchBar onSearch={onSearch} randomSearch={randomSearch}/>
    </div>
  )
}

export default Nav
