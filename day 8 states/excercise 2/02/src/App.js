
import './App.css'; // Import CSS file with alias 'layout'
import './darkapp.css';
import countries from './data';
import React, { useState } from 'react';


function App() {
  const [layout, setLayout] = useState(false);
  const [text, setText] = useState('Dark background');
  const [RandomCountry,SetCountry]=useState('');

  const selectRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    SetCountry(countries[randomIndex]);
  };

  function changeLayout() {
    setLayout(!layout);
    setText(layout ? 'Dark Background' : 'Light Background');

  }
  return (<div className={layout ? 'dark-mode' : 'light-mode'}>
    <Img />
    <Skills />
    <Date />
    <CountryRecommendation selectRandomCountry={selectRandomCountry} RandomCountry={RandomCountry}/>
    <Button changeLayout={changeLayout} text={text} />
  </div>);

}


function Img() {
  return (<>
    <div className="image">
      <img src="https://media.licdn.com/dms/image/D5635AQEKtHFuR7wWnQ/profile-framedphoto-shrink_400_400/0/1709732620217?e=1710410400&v=beta&t=RpJHQyLEAZxICOQintypiTPXo1y-LE2bLU-stxwUw1s" alt="" />
    </div>
    <div className='names'>
      <h3>Mohammed Hashmatullah☑️</h3>
      <h6>MERN STACK DEVELOPER, INDIA</h6>
    </div>
  </>
  );
}

function Skills() {
  return (<>
    <div className="skill">
      <h4>Skills</h4>
    </div>
    <div className='skill-set'>
      <p>HTML</p>
      <p>CSS</p>
      <p>SASS</p>
      <p>JS</p>
      <p>React</p>
      <p>Redux</p>
      <p>Node</p>
      <p>MongoDB</p>
      <p>Python</p>
      <p>Flask</p>
      <p>Django</p>
      <p>Numpy</p>
      <p>Pandas</p>
      <p>Data Analysis</p>
      <p>MYSQL</p>
      <p>GraphQL</p>
      <p>D3.js</p>
      <p>Gatsby</p>
      <p>Docker</p>
      <p>Heroku</p>
      <p>Git</p>
    </div>
  </>
  );
}


function Date() {
  return <div className='date'>
    <p>🕧Joined on March 07, 2024</p>
  </div>
}

function CountryRecommendation({selectRandomCountry,RandomCountry}) {
  return (<div className='Component'>
    <div className='CountryCard'>
      <div className='imgPart'>
        <div><img src={RandomCountry.img} alt='' /></div>
        <div><h3>{RandomCountry.name}</h3></div>
      </div>
      <div className='InfPart'>
        <div><h3>Capital:{RandomCountry.capital}</h3></div>
        <div><h3>Languages:{RandomCountry.language}</h3></div>
        <div><h3>Population:{RandomCountry.population}</h3></div>
        <div><h3>Currency:{RandomCountry.currency}</h3></div>
      </div>
      <button type="submit"  onClick={selectRandomCountry}>Random Country</button>
    </div>
  </div>
  );
}

function Button({ changeLayout, text }) {
  return <div className='butt'>
    <button type="submit" onClick={changeLayout}>{text}</button>
  </div>
}


export default App;