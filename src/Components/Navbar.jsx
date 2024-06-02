import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll'

function Navbar() {
  return (
      <aside>
        <img src="VK-logo.png" alt="vk logo" height="82px"/>
        <div className="links">
          <Link className="al" to="home" spy={true} smooth={true} offset={0} duration={500}>home</Link>
          <Link className="al" to="about" spy={true} smooth={true} offset={0} duration={500}>about</Link>
          <Link className="al" to="skills" spy={true} smooth={true} offset={0} duration={500}>skills</Link>
          <Link className="al" to="home" spy={true} smooth={true} offset={0} duration={500}>work</Link>
          <Link className="al" to="home" spy={true} smooth={true} offset={0} duration={500}>contact</Link>
        </div>
      </aside>
  )
}

export default Navbar
