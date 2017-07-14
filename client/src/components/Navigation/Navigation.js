import React from 'react'
import { Link } from 'react-router'
import {
        nav,
        navFlexBig,
        navFlexSmall,
        navLink,
        initial,
        loginButton} from './styles.css'

const Navigation = (props) => {
  console.log("NavBar is seeing:", props.user);
  return (
    <div className={nav}>
      <p className={initial}>CM</p>
      <ul className={navFlexBig}>
        <Link className={navLink} href="/home"> Home </Link>
        <Link className={navLink} href="/about"> About </Link>
        <Link className={navLink} href="/articles"> Articles </Link>
        <Link className={navLink} href="/post_article"> Post Article </Link>
        <div className={navFlexSmall}>
          <button className={loginButton}> Login </button>
          <button className={loginButton}> Logout </button>
        </div>
      </ul>
    </div>
  )
}

export default Navigation;
