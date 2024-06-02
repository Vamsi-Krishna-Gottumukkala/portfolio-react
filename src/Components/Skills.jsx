import React from 'react'
import './skills.css'

function Skills() {
  return (
    <div className='smain' id='skills'>
      <div className="ido">
        What I do <br /><span>Skills</span>
      </div>
      <div className="skills">
        <div className="line"></div>
        <div className="bxs">
            <div className="sbx">
                <img src="html5.png" alt="html" height="28px"/>
                <div className='hd'>HTML</div>
                <div className='pp'>I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.</div>
            </div>
            <div className="sbx">
                <img src="css.png" alt="css" height="37px"/>
                <div className='hd'>CSS</div>
                <div className='pp'>I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.</div>
            </div>
            <div className="sbx">
                <img src="js.png" alt="js" height="34px" />
                <div className='hd'>JS</div>
                <div className='pp'>I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.</div>
            </div>
            <div className="sbx">
                <img src="react.png" alt="reactjs" height="35px"/>
                <div className='hd'>React JS</div>
                <div className='pp'>I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
