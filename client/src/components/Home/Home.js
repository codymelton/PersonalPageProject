import React from 'react'
import {largeButton} from './styles.css'
import {button} from '../../sharedStyles/styles.css'

const Home = (props) => {
  return(
    <div>
      <h1> Hello from Home Component! </h1>
      <button className={largeButton} type='button'> Click me!</button>
      <button className={button} type='button'> Click me! </button>
    </div>
  )
}

export default Home
