
import { useState } from 'react';
import './App.css';



function App() {
  const [position, setPosition] = useState({ x: 50, y: 500 })

  const handleMouseEvent = () => {
    const NewX = Math.random() * (window.innerWidth-100);
    const NewY = Math.random() * (window.innerHeight-100);
    setPosition({ x: NewX, y: NewY });
    console.log("enter")
  }
  const style = {
    position: 'absolute',
    left: `${position.x}px`,
    top: `${position.y}px`,
    transition: 'left 0.5s, top 0.5s',
    backgroundColor: 'red',
    width: '25%',
    height: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };



return (
  <div className="App" style={style} onMouseEnter={handleMouseEvent}>
    <div className='innerdiv'> Hustler</div>
  </div>
);
}

export default App;
