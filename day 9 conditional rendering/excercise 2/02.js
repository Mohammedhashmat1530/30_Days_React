
// Make a single page application which change the body of the background based on the time of the day(Morning, Noon, Evening, Night)


import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    const getTimeOfDay = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        return 'Morning';
      } else if (hour >= 12 && hour < 17) {
        return 'Noon';
      } else if (hour >= 17 && hour < 20) {
        return 'Evening';
      } else {
        return 'Night';
      }
    };

    setTimeOfDay(getTimeOfDay());
  }, []);

  const getBackgroundColor = () => {
    switch (timeOfDay) {
      case 'Morning':
        return '#f5deb3';
      case 'Noon':
        return '#add8e6';
      case 'Evening':
        return '#ffb6c1';
      case 'Night':
        return '#483d8b';
      default:
        return '#ffffff'; // Default to white
    }
  };

  return (
    <div className="App" style={{ backgroundColor: getBackgroundColor() }}>
      <h1>Welcome to My Time of Day Background App!</h1>
      <p>Current Time of Day: {timeOfDay}</p>
    </div>
  );
};

export default App;
