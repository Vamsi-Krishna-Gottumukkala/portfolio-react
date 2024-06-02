import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll'

function Navbar() {

  return (
      <aside>
        <img src="VK-logo.png" alt="vk-logo" height="82px"/>
        <div className="links">
          <div className="sections">
            <Link to="home" spy={true} smooth={true} offset={0} duration={500}>home</Link>
          </div>
          <div className="sections">
            <Link to="about" spy={true} smooth={true} offset={0} duration={500} >about</Link>
          </div>
          <div className="sections">
            <Link to="skills" spy={true} smooth={true} offset={0} duration={500} >skills</Link>
          </div>
          <div className="sections">
            <Link to="/" spy={true} smooth={true} offset={0} duration={500} >work</Link>
          </div>
          <div className="sections">
            <Link to="/" spy={true} smooth={true} offset={0} duration={500} >contact</Link>
          </div>
        </div>
      </aside>
  )
}

export default Navbar
