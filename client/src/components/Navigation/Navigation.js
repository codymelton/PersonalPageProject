import React from 'react'
import { Link } from 'react-router'
import {nav, navFlex, navLink, initial, loginButton} from './styles.css'

const Navigation = (props) => {
  console.log("NavBar is seeing:", props.user);
  return (
    <div className={nav}>
      <p className={initial}>CM</p>
      <ul className={navFlex}>
        <Link className={navLink} to="/home"> Home </Link>
        <Link className={navLink} to="/about"> About </Link>
        <Link className={navLink} to="/articles"> Articles </Link>
        <Link className={navLink} to="/post_article"> Post Article </Link>
        <button className={loginButton}> Login </button>
        <button className={loginButton}> Logout </button>
      </ul>
    </div>
  )
}

export default Navigation;
