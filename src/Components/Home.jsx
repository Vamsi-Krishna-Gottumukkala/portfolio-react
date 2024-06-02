import React from 'react'
import './home.css'
import Typed from 'typed.js';

function Home() {

  const multitext = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(multitext.current, {
      strings: ['Fullstack Devloper', 'Ui/Ux Designer', 'Gamer'],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
      loop : true,
    });

    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div className='hmain' id='home'>
        <div className="hleft">
            <div className="hello">Hello, it's Me</div>
            <div className="name">Vamsi Krishna</div>
            <div className="intro">I am a <span ref={multitext}></span></div>
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
