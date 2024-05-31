import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <aside>
      <img src="VK-logo.png" alt="vk logo" height="82px"/>
      <div className="links">
        <a href="/">home</a>
        <a href="/">about</a>
        <a href="/">skills</a>
        <a href="/">work</a>
        <a href="/">contact</a>
      </div>
    </aside>
  )
}

export default Navbar
