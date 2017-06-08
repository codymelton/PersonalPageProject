import React from 'react'
import {largeButton,
        icon,
        mainTronBox,
        mainTronCircle,
        mainTronText,
        mainTronLinks} from './styles.css'
import {button} from '../../sharedStyles/styles.css'
import GitHubIcon from 'react-icons/lib/fa/github-square' //EXAMPLE OF REACT ICONS

const Home = (props) => {
  return(
    <div>
      <div className={mainTronBox}>
        <div className={mainTronCircle}>
          <img src="./img/headshot.png" />
        </div>
        <div className={mainTronText}>
          Cody Melton, M.Ed.
        </div>
        <div className={mainTronLinks}>
          <ul>
            <li>test</li>
          </ul>
        </div>
      </div>

      <h1> Hello from Home Component! </h1>
      <button className={largeButton} type='button'> Click me!</button>
      <button className={button} type='button'> Click me! </button>
      <GitHubIcon className={icon} />
    </div>
  )
}

export default Home
