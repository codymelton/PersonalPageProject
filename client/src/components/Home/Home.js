import React from 'react'
import {largeButton,
        icon,
        mainTronBox,
        mainTronCircle,
        mainTronText,
        mainTronLinks,
        secTronText} from './styles.css'
import {button} from '../../sharedStyles/styles.css'
import GitHubIcon from 'react-icons/lib/fa/github' //EXAMPLE OF REACT ICONS
import TwitterIcon from 'react-icons/lib/fa/twitter'
import LinkedInIcon from 'react-icons/lib/fa/linkedin'
import MailIcon from 'react-icons/lib/fa/envelope-o'

const Home = (props) => {
  return(
    <div>
      <div className={mainTronBox}>
        <div className={mainTronCircle}>
          <img src="./img/headshot.png" />
        </div>
        <div>
          <div className={mainTronText}>
            Cody Melton, M.Ed.
          </div>
          <div className={secTronText}>
            Full Stack Web Developer
          </div>
          <div className={secTronText}>
            Curriculum Development Consultant
          </div>
        </div>
        <div className={mainTronLinks}>
          <ul>
            <li>
              <a
                href="https://www.github.com/codymelton" target="_blank">
                <GitHubIcon className={icon} />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/cmeltonmt" target="_blank">
                <TwitterIcon className={icon} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/codymeltonmt" taget="_blank">
                <LinkedInIcon className={icon} />
              </a>
            </li>
            <li>
              <a
                href="mailto:cody@codymelton.io">
                <MailIcon className={icon} />
              </a>
            </li>
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
