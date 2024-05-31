import React from 'react'
import './home.css'

function Home() {
  return (
    <div className='hmain'>
        <div className="hleft">
            <div className="hello">Hello, it's Me</div>
            <div className="name">Vamsi Krishna</div>
            <div className="intro">I am a <span>Frontend Developer</span></div>
        </div>
        <div className="hright">
            <div className="mg">
                <img src="stock.jpg" alt="stck" width="620px" className='ig'/>
            </div>
        </div>
    </div>
  )
}

export default Home
