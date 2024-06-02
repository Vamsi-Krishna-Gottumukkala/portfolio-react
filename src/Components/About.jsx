import React from 'react'
import './about.css'

function About() {
  return (
    <div className='amain' id='about'>
      <div className="aleft">
        <img src="photo_me.png" alt="my_photo" width="300px" className='my_photo'/>
      </div>
      <div className="aright">
        <div className="abtme">About <span>Me</span></div>
        <div className="mtr">
            <p className='about'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Necessitatibus, accusantium placeat. Consectetur labore repudiandae 
                dicta id in provident non magnam rerum cum consequuntur perspiciatis, explicabo, 
                voluptatum harum aspernatur! Cupiditate, doloremque.
            </p>
            <div className="resume">
                <a href="Resume.pdf" target='_blank'>Download Resume</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
