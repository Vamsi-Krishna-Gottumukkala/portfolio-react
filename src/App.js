import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="main">
        <Home></Home>
        <About></About>
      </div>
    </div>
  );
}

export default App;
