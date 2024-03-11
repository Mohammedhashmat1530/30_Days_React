

//Make a single page application which changes the body of the background based on the season of the year(Autumn, Winter, Spring, Summer)


import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [season, setSeason] = useState('');

  useEffect(() => {
    const getSeason = () => {
      const month = new Date().getMonth() + 1;
      if (month >= 3 && month <= 5) {
        return 'Spring';
      } else if (month >= 6 && month <= 8) {
        return 'Summer';
      } else if (month >= 9 && month <= 11) {
        return 'Autumn';
      } else {
        return 'Winter';
      }
    };

    setSeason(getSeason());
  }, []);

  const getBackgroundColor = () => {
    switch (season) {
      case 'Spring':
        return '#9eebcf';
      case 'Summer':
        return '#f9da9e';
      case 'Autumn':
        return '#f0bc8b';
      case 'Winter':
        return '#c0c0c0';
      default:
        return '#ffffff'; // Default to white
    }
  };

  return (
    <div className="App" style={{ backgroundColor: getBackgroundColor() }}>
      <h1>Welcome to My Seasonal Background App!</h1>
      <p>Current Season: {season}</p>
    </div>
  );
};

export default App;
